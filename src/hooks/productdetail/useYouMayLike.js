import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

export const useYouMayLikeProducts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["you-may-like"],
    queryFn: async () => {
      const response = await api.get(`/product`);
      return response.data.products;
    },
  });
  return { data, isLoading, isError, error };
};
