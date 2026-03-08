import { RiShoppingBag3Line } from "react-icons/ri";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishlist } from "../../api/wishlist";
import toast from "react-hot-toast";

const WishlistCard = ({ item, mockId }) => {
  const queryClient = useQueryClient();
  const productId = mockId || item?._id;

  const removeMutation = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Removed from wishlist");
    },
  });

  return (
    <div
      className="flex flex-col md:flex-row font-[Inter] tracking-wide items-start md:items-center justify-between 
                    py-5 px-6 border border-[#E8E8E8] rounded-2xl gap-4"
    >
      <div className="flex items-center gap-4 w-full md:w-auto md:flex-1 min-w-0">
        <img src={item?.image || "/Featured/Lehanga.png"} className="h-24 w-20 object-cover rounded-md flex-shrink-0" />
        <div className="flex flex-col flex-1 min-w-0">
          <p className="font-medium text-xs text-[#777777] mb-1">Order ID: ABC-{productId ? productId.substring(20) : "84521"}</p>
          <p className="text-base text-[#181817] truncate font-medium">{item?.productName || "Raw Silk Dupatta"}</p>
          <p className="font-medium mt-1">${item?.price || "12,500"}</p>
        </div>
      </div>

      <div className="flex items-center gap-20 w-full md:w-auto mt-4 md:mt-0">
        <button
          className="w-full md:w-[200px] flex items-center justify-center gap-2 
         bg-[#D77C84] font-[Inter] text-white text-sm py-2.5 transition hover:bg-[#b05f66]"
        >
          <RiShoppingBag3Line className="text-lg" />
          Add to bag
        </button>
        <button
          onClick={() => removeMutation.mutate(productId)}
          className="cursor-pointer text-2xl text-[#777777] hover:text-black transition"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
