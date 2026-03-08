import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WishlistCard from "../Components/wishlist/WishlistCard";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getWishlist, clearWishlist } from "../api/wishlist";
import toast from "react-hot-toast";

const Wishlist = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  const clearMutation = useMutation({
    mutationFn: clearWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Wishlist cleared");
    },
    onError: () => toast.error("Error clearing wishlist"),
  });

  const wishlistItems = data?.wishlist || [];

  return (
    <div>
      <Header />
      <div className="flex justify-between items-center mt-10 px-4 md:px-12 lg:px-24">
        <div className="flex gap-3 text-sm font-[Inter]">
          <button className="text-[#848484]">Home &gt;</button>
          <button>Wishlist</button>
        </div>
        {wishlistItems.length > 0 && (
          <button
            onClick={() => clearMutation.mutate()}
            className="bg-[#D77C84] text-white px-4 py-2 text-sm hover:opacity-90 transition rounded-md font-[Inter]"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="mt-10 md:mt-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col gap-6 md:gap-8 min-h-[40vh]">
        {isLoading ? (
          <p className="text-center font-[Inter] text-gray-500">Loading wishlist...</p>
        ) : wishlistItems.length > 0 ? (
          wishlistItems.map((item, idx) => (
            <WishlistCard key={idx} item={item} mockId={item?._id} />
          ))
        ) : (
          <p className="text-center font-[Inter] text-gray-400">Your wishlist is empty.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
