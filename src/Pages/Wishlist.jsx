import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WishlistCard from "../Components/wishlist/WishlistCard";
import {
  useGetWishlist,
  useClearWishlist,
} from "../hooks/wishlist/useWishlist";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { data, isLoading } = useGetWishlist();
  const wishlistItems = data?.wishlist || [];
  const { isPending: isClearing, mutateAsync: clearAsync } = useClearWishlist();
  const { currentUser } = useContext(UserContext);

  // if (!currentUser) {
  //   const navigate = useNavigate();
  //   navigate("/signin");
  // }

  const handleClear = async () => {
    try {
      await clearAsync();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-10 px-4 md:px-12 lg:px-24">
        <div className="flex gap-3 text-sm font-[Inter]">
          <Link to="/">
            <button className="text-[#848484] cursor-pointer">
              Home &gt; &nbsp;
            </button>
            <button>Wishlist</button>
          </Link>
        </div>
        {wishlistItems.length > 0 && (
          <button
            onClick={handleClear}
            className="bg-[#D77C84] text-white px-4 py-2 text-sm hover:opacity-90 transition rounded-md font-[Inter]"
            disabled={isClearing}
          >
            {isClearing ? "Clearing..." : "Clear All"}
          </button>
        )}
      </div>

      <div className="mt-10 md:mt-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col gap-6 md:gap-8 min-h-[40vh]">
        {isLoading ? (
          <p className="text-center font-[Inter] text-gray-500">
            Loading wishlist...
          </p>
        ) : wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <WishlistCard key={item._id} item={item} />
          ))
        ) : (
          <p className="text-center font-[Inter] text-gray-400">
            Your wishlist is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
