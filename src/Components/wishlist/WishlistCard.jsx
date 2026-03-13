import { useAddToCart, useGetCart } from "../../hooks/cart/useCart.js";
import { useWishlistCardRemove } from "../../hooks/wishlist/useWishlistCard.js";
import { RiShoppingBag3Line, RiCheckLine } from "react-icons/ri";

const WishlistCard = ({ item }) => {
  const { isPending: isRemoving, mutateAsync: removeAsync } = useWishlistCardRemove();
  const productId = item?._id;

  const { isPending: isAddingToCart, mutateAsync: addToCartAsync } = useAddToCart();

  const { data: cartData } = useGetCart();
  const cartItems = cartData?.cart || [];
  const isInCart = cartItems.some(
    (item) => item.product?._id === productId || item.product === productId,
  );

  const handleRemove = async () => {
    try {
      if (productId) {
        await removeAsync(productId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row font-[Inter] tracking-wide items-start justify-center md:items-center  py-5 px-6 border border-[#E8E8E8] rounded-2xl gap-4">
      <div className="flex items-center gap-4 w-full md:w-auto md:flex-1 min-w-0">
        <img
          src={item?.image}
          className="h-24 w-20 object-cover rounded-md flex-shrink-0"
          alt={item?.productName || "Product"}
        />
        <div className="flex flex-col flex-1 min-w-0">
          <p className="font-medium text-xs text-[#777777] mb-1">
            Order ID: ABC-{productId ? productId.substring(20) : ""}
          </p>
          <p className="text-base text-[#181817] truncate font-medium">{item?.productName}</p>
          <p className="font-medium mt-1">${item?.price}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 w-full md:w-auto mt-4 md:mt-0">
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
          {isInCart ? (
            <RiCheckLine className="text-lg text-[#D77C84]" />
          ) : (
            <RiShoppingBag3Line className="text-lg text-gray-700" />
          )}
        </button>
        <button
          onClick={handleRemove}
          className="cursor-pointer ml-20 text-2xl text-[#777777] hover:text-black transition"
          disabled={isRemoving}
        >
          {isRemoving ? "..." : "×"}
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
