import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export const useWishlistCardRemove = () => {
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
      toast.error(error?.response?.data?.error || error?.response?.data?.message || "Error removing item");
    },
  });
  return { isPending, mutateAsync };
};
