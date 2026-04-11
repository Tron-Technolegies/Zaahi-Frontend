import React, { useContext, useState } from "react";

import { useAddToCart, useGetCart } from "../../hooks/cart/useCart.js";
import Picture from "./Picture";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiShoppingBag3Line, RiCheckLine } from "react-icons/ri";
import { UserContext } from "../../UserContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const DetailPage = ({ product }) => {
  const productId = product?._id;

  const { isPending, mutateAsync } = useAddToCart();
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(product?.image);
  const [selectedSize, setSelectedSize] = useState(null);
  const { data: cartData } = useGetCart();
  const cartItems = cartData?.cart || [];

  const cartItem = cartItems.find(
    (item) => item.product?._id === productId || item.product === productId,
  );
  const isInCart = cartItem ? true : false;

  return (
    <div className="md:mt-20 mt-5 max-w-8xl md:px-30 px-5">
      <div className="flex gap-2  md:gap-3 text-sm font-[Inter]">
        <Link to="/">
          <button className="text-[#848484] cursor-pointer">Home &gt;</button>
        </Link>
        <Link to="/collections">
          <button className="text-[#848484] cursor-pointer">
            Collections &gt;
          </button>
        </Link>
        <button>{product?.productName}</button>
      </div>

      <div className="flex md:flex-row flex-col mt-10 justify-between">
        <div className="flex items-start justify-center gap-6 md:w-2/3">
          <div className="flex flex-col max-h-125 overflow-y-scroll gap-5 ">
            {[product?.image, ...product?.extraImages].map((item) => (
              <Picture
                key={item.publicId}
                product={item}
                setSelected={setSelected}
              />
            ))}
          </div>
          <div className="border border-[#D9D9D9] p-10">
            <img
              src={selected?.url}
              alt={selected?.publicId}
              className="mx-auto max-h-125 object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:w-1/3 mt-10">
          <button className="w-17.5 bg-[#F42727] text-white px-2 py-1 text-sm mb-7 font-[Inter]">
            SALE
          </button>
          <p className="font-[Be Vietnam Pro]">{product?.productName}</p>
          <p className="text-sm text-gray-400">{product?.category}</p>
          {product.totalReviews > 0 && (
            <div className="text-sm text-[#FFB800] mb-4 flex items-center font-[Inter]">
              <div className="flex gap-1">
                {Array.from({ length: Math.round(product?.rating) }).map(
                  (_, index) => (
                    <p key={index} className="text-[#FFB800]">
                      <FaStar />
                    </p>
                  ),
                )}
                {product?.rating < 5 &&
                  Array.from({ length: 5 - Math.round(product?.rating) }).map(
                    (_, index) => (
                      <p key={index} className="text-[#DADADA]">
                        <FaStar />
                      </p>
                    ),
                  )}
              </div>
              <span className="ml-2">
                {product.rating?.toFixed(1)} ({product.totalReviews} reviews)
              </span>
            </div>
          )}

          <div className="flex items-center gap-3 mb-6 font-[Inter]">
            <p className="text-2xl font-semibold">
              ${selectedSize ? selectedSize.price : product?.basePrice}
            </p>
            {/* <p className="text-[#9A9A9A] line-through">
              ${product?.price ? Number(product.price) + 2500 : ""}
            </p> */}
          </div>
          <p className="text-sm text-gray-400">Select Size</p>
          <div className="flex flex-wrap gap-3 my-3">
            {product?.variants?.map((item) => (
              <button
                className={`w-8 h-8 border text-sm rounded-full hover:bg-gray-500 border-gray-300 ${selectedSize?.size === item.size && "bg-gray-500"}`}
                onClick={() => setSelectedSize(item)}
              >
                {item.size}
              </button>
            ))}
          </div>

          <div className="flex sm:flex-row flex-col items-center mt-8 gap-5 font-[Inter]">
            {/* <div className="flex items-center  border border-[#7B7B7B66] ">
              <button
                onClick={handleDecrease}
                className={`px-3 py-2 ${quantity <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
                disabled={quantity <= 1}
              >
                <AiOutlineMinus />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={handleIncrease}
                className={`px-3 py-2 ${quantity >= product?.stock ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
                disabled={quantity >= product?.stock}
              >
                <AiOutlinePlus />
              </button>
            </div> */}
            <button
              onClick={async () => {
                if (!currentUser) {
                  navigate("/signin");
                  return;
                }
                if (!selectedSize) {
                  toast.error("Please select a size");
                  return;
                }
                if (!isInCart) {
                  await mutateAsync({ productId, size: selectedSize?.size });
                }
                navigate("/cart");
              }}
              disabled={isPending || isInCart}
              className="w-full px-4 bg-[#D77C84] font-[Inter] cursor-pointer text-white text-xs py-2"
            >
              {isPending ? "ADDING..." : isInCart ? "ADDED TO CART" : "BUY NOW"}
            </button>
            <button
              onClick={() => {
                if (!currentUser) {
                  navigate("/signin");
                  return;
                }
                if (!selectedSize) {
                  toast.error("please select a size");
                  return;
                }
                if (!isInCart) {
                  mutateAsync({ productId, size: selectedSize?.size });
                }
              }}
              disabled={isPending || isInCart}
              className="w-full py-2 px-4 border border-[#7B7B7B66] text-xs flex cursor-pointer gap-2 items-center justify-center"
            >
              {isInCart ? (
                <RiCheckLine className="text-lg text-green-600" />
              ) : (
                <RiShoppingBag3Line className="text-lg text-gray-700" />
              )}
              Add To Cart
            </button>
          </div>
          <hr className="my-10  border-px border-[#7B7B7B66]" />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
