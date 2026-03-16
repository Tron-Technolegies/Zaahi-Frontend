import React from "react";
import { PiHeartLight, PiHeartFill } from "react-icons/pi";
import { RiShoppingBag3Line, RiCheckLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  useCardGetWishlist,
  useCardAddToWishlist,
  useCardRemoveWishlist,
} from "../../hooks/collections/useCard.js";
import { useAddToCart, useGetCart } from "../../hooks/cart/useCart.js";

const Card = ({ product }) => {
  const productId = product?._id;

  const { data } = useCardGetWishlist();
  const wishlistItems = data?.wishlist || [];

  const wishlistedItem = wishlistItems.find(
    (item) => item === productId || item._id === productId
  );
  const isWishlisted = wishlistedItem ? true : false;

  const { isPending: isAdding, mutateAsync: addAsync } = useCardAddToWishlist();
  const { isPending: isRemoving, mutateAsync: removeAsync } = useCardRemoveWishlist();
  const { isPending: isAddingToCart, mutateAsync: addToCartAsync } = useAddToCart();

  const { data: cartData } = useGetCart();
  const cartItems = cartData?.cart || [];

  const cartItem = cartItems.find(
    (item) => item.product?._id === productId || item.product === productId
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
      <div className="border border-[#7B7B7B66] p-8 relative group cursor-pointer">
        <button
          onClick={handleWishlistToggle}
          className="absolute top-5 right-5 text-[#D77C84] z-10 transition hover:scale-110"
        >
          {isWishlisted ? (
            <PiHeartFill className="text-2xl text-[#D77C84]" />
          ) : (
            <PiHeartLight className="text-2xl" />
          )}
        </button>
        <div className="transition-transform duration-500 hover:scale-102">
          <Link to={`/product-details/${product?._id}`}>
            <img
              src={product?.image}
              alt={product?.productName}
              className="mx-auto h-[340px] object-contain "
            />
          </Link>
          <div className="mt-6 grid grid-cols-[200px_36px] place-content-center gap-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100">
            <button
              onClick={() => addToCartAsync({ productId })}
              disabled={isAddingToCart}
              className="w-[200px] bg-[#D77C84] font-[Inter] text-white text-xs py-2 cursor-pointer"
            >
              {isAddingToCart ? "ADDING..." : "BUY NOW"}
            </button>

            <button
              onClick={() => !isInCart && addToCartAsync({ productId })}
              disabled={isAddingToCart || isInCart}
              className="w-9 h-9 border border-[#E6E6E6] bg-[#EAEAEA] text-xs flex items-center justify-center cursor-pointer"
            >
              {isInCart ? <RiCheckLine className="text-lg text-[#D77C84]" /> : <RiShoppingBag3Line className="text-lg text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-sm font-[Be Vietnam Pro]">{product?.productName}</p>
      <p className="mt-1 text-center text-[#777777] text-sm font-semibold font-[Be Vietnam Pro]">
        ${product?.price}
      </p>
    </div>
  );
};

export default Card;
