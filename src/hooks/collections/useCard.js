import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export const useCardGetWishlist = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const { data } = await api.get(`/wishlist`);
      return data;
    },
  });
  return { data, isLoading, isError, error };
};

export const useCardAddToWishlist = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (productData) => {
      const productId = typeof productData === "object" ? productData._id : productData;
      await api.patch(`/wishlist/add`, { productId });
    },
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
    mutationFn: async (productId) => {
      await api.patch(`/wishlist/remove`, { productId });
    },
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
