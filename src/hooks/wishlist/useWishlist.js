import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getWishlist, clearWishlist, addToWishlist, removeFromWishlist } from "../../api/wishlist";
import toast from "react-hot-toast";

export const useGetWishlist = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });
  return { data, isLoading, isError, error };
};

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Added to wishlist");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || error.message);
    },
  });
  return { isPending, mutateAsync };
};

export const useRemoveFromWishlist = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Removed from wishlist");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || error.message);
    },
  });
  return { isPending, mutateAsync };
};

export const useClearWishlist = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: clearWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Wishlist cleared");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || error.message);
    },
  });
  return { isPending, mutateAsync };
};
