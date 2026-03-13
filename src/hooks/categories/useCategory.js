import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

export const useGetCategories = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await api.get(`/category`);
      return data;
    },
  });
  return { isLoading, isError, error, data };
};
