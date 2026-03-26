import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export const useGetReview = ({ productId, currentPage }) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["reviews", productId, currentPage],
    queryFn: async () => {
      const { data } = await api.get(`/review/${productId}`, {
        params: { currentPage },
      });
      return data;
    },
  });
  return { isLoading, isError, error, data };
};

export const useAddReview = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data) => {
      await api.post(`/review/add`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({ queryKey: ["product"] });
      toast.success("Added");
    },
    onError: (error) => {
      toast.error(error.response.data.message || error.response.data.error);
    },
  });
  return { isPending, mutateAsync };
};
