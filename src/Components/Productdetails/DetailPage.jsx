import React, { useContext } from "react";
import { useDetailPageQuantity } from "../../hooks/productdetail/useDetailPage.js";
import { useAddToCart, useGetCart } from "../../hooks/cart/useCart.js";
import Picture from "./Picture";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiShoppingBag3Line, RiCheckLine } from "react-icons/ri";
import { UserContext } from "../../UserContext.jsx";
import { useNavigate } from "react-router-dom";

const DetailPage = ({ product }) => {
  const productId = product?._id;
  const { quantity, handleIncrease, handleDecrease } = useDetailPageQuantity(
    product?.stock,
  );
  const { isPending, mutateAsync } = useAddToCart();
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { data: cartData } = useGetCart();
  const cartItems = cartData?.cart || [];

  const cartItem = cartItems.find(
    (item) => item.product?._id === productId || item.product === productId,
  );
  const isInCart = cartItem ? true : false;

  return (
    <div className="mt-20 max-w-8xl">
      <div className="flex px-50 gap-3 text-sm font-[Inter]">
        <a href="/">
          <button className="text-[#848484] cursor-pointer">Home &gt;</button>
        </a>
        <a href="/collections">
          <button className="text-[#848484] cursor-pointer">
            Collections &gt;
          </button>
        </a>
        <button>{product?.productName}</button>
      </div>

      <div className="flex mt-10 gap-25  justify-center">
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col gap-5">
            <Picture product={product} />
            <Picture product={product} />
            <Picture product={product} />
            <Picture product={product} />
          </div>
          <div className="border border-[#D9D9D9] p-10">
            <img
              src={product?.image}
              alt={product?.productName}
              className="mx-auto h-92.5 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <button className="w-17.5 bg-[#F42727] text-white px-2 py-1 text-sm mb-7 font-[Inter]">
            SALE
          </button>
          <p className="font-[Be Vietnam Pro]">{product?.productName}</p>
          <p className="text-sm text-[#777777] mb-4 font-[Inter]">
            ★★★★☆ <span className="ml-2">4.9 (127 reviews)</span>
          </p>
          <div className="flex items-center gap-3 mb-6 font-[Inter]">
            <p className="text-2xl font-semibold">${product?.price}</p>
            <p className="text-[#9A9A9A] line-through">
              ${product?.price ? Number(product.price) + 2500 : ""}
            </p>
          </div>

          <div className="flex items-center mt-8 gap-5 font-[Inter]">
            <div className="flex items-center  border border-[#7B7B7B66] ">
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
            </div>
            <button
              onClick={async () => {
                if (!currentUser) {
                  navigate("/signin");
                  return;
                }
                if (!isInCart) {
                  await mutateAsync({ productId, qty: quantity });
                }
                navigate("/cart");
              }}
              disabled={isPending || isInCart}
              className="w-75 bg-[#D77C84] font-[Inter] cursor-pointer text-white text-xs py-2"
            >
              {isPending ? "ADDING..." : isInCart ? "ADDED TO CART" : "BUY NOW"}
            </button>
            <button
              onClick={() => {
                if (!currentUser) {
                  navigate("/signin");
                  return;
                }
                if (!isInCart) {
                  mutateAsync({ productId, qty: quantity });
                }
              }}
              disabled={isPending || isInCart}
              className="w-9 h-9 border border-[#7B7B7B66] text-xs flex cursor-pointer items-center justify-center"
            >
              {isInCart ? (
                <RiCheckLine className="text-lg text-green-600" />
              ) : (
                <RiShoppingBag3Line className="text-lg text-gray-700" />
              )}
            </button>
          </div>
          <hr className="my-10  border-px border-[#7B7B7B66]" />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
