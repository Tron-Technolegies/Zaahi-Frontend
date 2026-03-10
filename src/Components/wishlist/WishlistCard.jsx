import { useWishlistCardRemove } from "../../hooks/wishlist/useWishlistCard.js";
import { RiShoppingBag3Line } from "react-icons/ri";

const WishlistCard = ({ item }) => {
  const { isPending: isRemoving, mutateAsync: removeAsync } = useWishlistCardRemove();
  const productId = item?._id;

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
    <div className="flex flex-col md:flex-row font-[Inter] tracking-wide items-start md:items-center justify-between py-5 px-6 border border-[#E8E8E8] rounded-2xl gap-4">
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
          <p className="text-base text-[#181817] truncate font-medium">
            {item?.productName}
          </p>
          <p className="font-medium mt-1">${item?.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-20 w-full md:w-auto mt-4 md:mt-0">
        <button className="w-full md:w-[200px] flex items-center justify-center gap-2 bg-[#D77C84] font-[Inter] text-white text-sm py-2.5 transition hover:bg-[#b05f66]">
          <RiShoppingBag3Line className="text-lg" />
          Add to bag
        </button>
        <button
          onClick={handleRemove}
          className="cursor-pointer text-2xl text-[#777777] hover:text-black transition"
          disabled={isRemoving}
        >
          {isRemoving ? "..." : "×"}
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
