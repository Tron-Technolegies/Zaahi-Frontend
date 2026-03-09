import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getWishlist, addToWishlist, removeFromWishlist } from "../../api/wishlist";
import toast from "react-hot-toast";

export const useCardGetWishlist = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });
  return { data, isLoading, isError, error };
};

export const useCardAddToWishlist = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Added to wishlist");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || "Error adding to wishlist");
    },
  });
  return { isPending, mutateAsync };
};

export const useCardRemoveWishlist = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Removed from wishlist");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || "Error removing from wishlist");
    },
  });
  return { isPending, mutateAsync };
};
