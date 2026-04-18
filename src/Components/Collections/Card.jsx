import React, { useContext } from "react";
import { PiHeartLight, PiHeartFill } from "react-icons/pi";
import { RiShoppingBag3Line, RiCheckLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import {
  useCardGetWishlist,
  useCardAddToWishlist,
  useCardRemoveWishlist,
} from "../../hooks/collections/useCard.js";
import { useAddToCart, useGetCart } from "../../hooks/cart/useCart.js";
import { UserContext } from "../../UserContext.jsx";

const Card = ({ product }) => {
  const productId = product?._id;
  const navigate = useNavigate();

  const { data } = useCardGetWishlist();
  const wishlistItems = data?.wishlist || [];
  const { currentUser } = useContext(UserContext);

  const wishlistedItem = wishlistItems.find(
    (item) => item === productId || item._id === productId,
  );
  const isWishlisted = wishlistedItem ? true : false;

  const { isPending: isAdding, mutateAsync: addAsync } = useCardAddToWishlist();
  const { isPending: isRemoving, mutateAsync: removeAsync } =
    useCardRemoveWishlist();
  const { isPending: isAddingToCart, mutateAsync: addToCartAsync } =
    useAddToCart();

  const { data: cartData } = useGetCart();
  const cartItems = cartData?.cart || [];

  const cartItem = cartItems.find(
    (item) => item.product?._id === productId || item.product === productId,
  );
  const isInCart = cartItem ? true : false;

  const handleWishlistToggle = async () => {
    try {
      if (isWishlisted) {
        await removeAsync(productId);
      } else {
        await addAsync(product || productId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="border border-[#7B7B7B66] relative group cursor-pointer">
        <button
          onClick={handleWishlistToggle}
          className="absolute top-5 right-5 text-[white] z-10 transition hover:scale-110"
        >
          {isWishlisted ? (
            <PiHeartFill className="text-2xl text-[white]" />
          ) : (
            <PiHeartLight className="text-2xl" />
          )}
        </button>
        <div className="mx-auto transition-transform duration-500 flex flex-col aspect-3/4 overflow-hidden justify-between items-center hover:scale-102">
          <Link
            to={`/product-details/${product?._id}`}
            className="overflow-hidden"
          >
            <img
              src={product?.image?.url}
              alt={product?.productName}
              className="mx-auto object-cover w-full"
            />
          </Link>
          {/* <div className="md:mt-6 w-full flex gap-2 items-center mx-auto translate-y-2 transition-all duration-300 group-hover:opacity-100">
            <button
              onClick={async () => {
                if (!currentUser) {
                  navigate("/signin");
                  return;
                }
                if (!isInCart) {
                  await addToCartAsync({ productId });
                }
                navigate("/cart");
              }}
              disabled={isAddingToCart}
              className="w-full bg-[#D77C84] font-[Inter] text-white text-xs py-2 cursor-pointer"
            >
              {isAddingToCart ? "ADDING..." : "BUY NOW"}
            </button>

            <button
              onClick={() => {
                if (!currentUser) {
                  navigate("/signin");
                  return;
                }
                if (!isInCart) {
                  addToCartAsync({ productId });
                }
              }}
              disabled={isAddingToCart || isInCart}
              className="w-9 h-8 border border-[#E6E6E6] bg-[#EAEAEA] text-xs flex items-center justify-center cursor-pointer"
            >
              {isInCart ? (
                <RiCheckLine className="text-lg text-[#D77C84]" />
              ) : (
                <RiShoppingBag3Line className="text-lg text-gray-700" />
              )}
            </button>
          </div> */}
        </div>
      </div>
      <p className="mt-5 text-left text-sm font-[Be Vietnam Pro] hidden md:block">
        {product?.productName?.slice(0, 25)}...
      </p>
      <p className="mt-5 text-left text-sm font-[Be Vietnam Pro] md:hidden">
        {product?.productName?.slice(0, 18)}...
      </p>
      <p className="mt-1 text-left  text-sm font-semibold font-[Be Vietnam Pro]">
        ${product?.basePrice}
      </p>
    </div>
  );
};

export default Card;
