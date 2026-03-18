import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

export const useGetOrders = ({ currentPage, status }) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["orders", currentPage, status],
    queryFn: async () => {
      const { data } = await api.get(`/order/my-orders`, {
        params: { currentPage, status },
      });
      return data;
    },
  });
  return { isError, isLoading, error, data };
};
