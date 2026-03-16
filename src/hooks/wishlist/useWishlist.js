import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export const useGetWishlist = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const { data } = await api.get(`/wishlist`);
      return data;
    },
  });
  return { data, isLoading, isError, error };
};

export const useAddToWishlist = () => {
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
      toast.error(error?.response?.data?.error || error?.response?.data?.message || error.message);
    },
  });
  return { isPending, mutateAsync };
};

export const useRemoveFromWishlist = () => {
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
      toast.error(error?.response?.data?.error || error?.response?.data?.message || error.message);
    },
  });
  return { isPending, mutateAsync };
};

export const useClearWishlist = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async () => {
      await api.patch(`/wishlist/clear`);
    },
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
