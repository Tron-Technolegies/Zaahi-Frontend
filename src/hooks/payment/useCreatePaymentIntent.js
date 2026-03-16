import { useMutation } from "@tanstack/react-query";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export const useCreatePayment = () => {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data) => {
      await api.post(`/payment/payment-intent`, data, {
        withCredentials: true,
      });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  return { isPending, mutateAsync };
};
