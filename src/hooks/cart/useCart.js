import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export const useGetCart = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await api.get(`/cart`);
      return data;
    },
  });
  return { data, isLoading, isError, error };
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async ({ productId, qty = 1 }) => {
      await api.patch(`/cart/add`, { productId, qty });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Added to cart");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || "Error adding to cart");
    },
  });
  return { isPending, mutateAsync };
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (itemId) => {
      await api.patch(`/cart/remove`, { itemId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Removed from cart");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || "Error removing item");
    },
  });
  return { isPending, mutateAsync };
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async ({ itemId, qty }) => {
      await api.patch(`/cart/update`, { itemId, qty });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || "Error updating cart");
    },
  });
  return { isPending, mutateAsync };
};

export const useClearCart = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async () => {
      await api.patch(`/cart/clear`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Cart cleared");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error || error?.response?.data?.message || "Error clearing cart");
    },
  });
  return { isPending, mutateAsync };
};
