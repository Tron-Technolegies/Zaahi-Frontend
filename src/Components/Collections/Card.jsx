import React from "react";
import { PiHeartLight, PiHeartFill } from "react-icons/pi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getWishlist, addToWishlist, removeFromWishlist } from "../../api/wishlist";
import toast from "react-hot-toast";

const Card = ({ product, mockId }) => {
  const queryClient = useQueryClient();
  const productId = product?._id || mockId || "65b4c4ab1234567890abcdef";

  const { data } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  const wishlistItems = data?.wishlist || [];
  const isWishlisted = wishlistItems.some(item => item === productId || item._id === productId);

  const addMutation = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Added to wishlist");
    },
    onError: (error) => toast.error(error.message || "Error adding to wishlist")
  });

  const removeMutation = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Removed from wishlist");
    },
    onError: (error) => toast.error("Error removing from wishlist")
  });

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeMutation.mutate(productId);
    } else {
      addMutation.mutate(product || productId);
    }
  };

  return (
    <div>
      <div className="border border-[#7B7B7B66] p-8 relative group cursor-pointer">
        <button onClick={handleWishlistToggle} className="absolute top-5 right-5 text-[#D77C84] z-10 transition hover:scale-110">
          {isWishlisted ? <PiHeartFill className="text-2xl text-[#D77C84]" /> : <PiHeartLight className="text-2xl" />}
        </button>
        <div className="transition-transform duration-500 hover:scale-102">
          <Link to={`/product-details`}>
            <img src={product?.image || "/Featured/Lehanga.png"} alt={product?.productName || "Product"} className="mx-auto h-[340px] object-contain " />
          </Link>
          <div className="mt-6 grid grid-cols-[200px_36px] place-content-center gap-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100">
            <button className="w-[200px] bg-[#D77C84] font-[Inter] text-white text-xs py-2">
              BUY NOW
            </button>

            <button className="w-9 h-9 border border-[#E6E6E6] bg-[#EAEAEA] text-xs flex items-center justify-center">
              <RiShoppingBag3Line className="text-lg text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-sm font-[Be Vietnam Pro]">{product?.productName || "Raw Silk with Net Dupatta"}</p>
      <p className="mt-1 text-center text-[#777777] text-sm font-semibold font-[Be Vietnam Pro]">
        ${product?.price || "12,500"}
      </p>
    </div>
  );
};

export default Card;
