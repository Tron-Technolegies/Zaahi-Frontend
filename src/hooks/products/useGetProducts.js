import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

export const useGetProducts = ({
  search,
  currentPage,
  category,
  minPrice,
  maxPrice,
  sortBy,
  isFeatured,
  newArrivals,
}) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: [
      "products",
      search,
      currentPage,
      category,
      minPrice,
      maxPrice,
      sortBy,
      isFeatured,
      newArrivals,
    ],
    queryFn: async () => {
      const { data } = await api.get("/product", {
        params: {
          search,
          category,
          currentPage,
          sortBy,
          minPrice,
          maxPrice,
          isFeatured,
          newArrivals,
        },
      });
      return data;
    },
  });
  return { isError, isLoading, error, data };
};
