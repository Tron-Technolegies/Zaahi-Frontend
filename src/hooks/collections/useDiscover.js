import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { useSearchParams } from "react-router-dom";

export const useDiscoverProducts = (queryParams) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["discover-products", queryParams],
    queryFn: async () => {
      const response = await api.get(`/product`, { params: queryParams });
      return response.data.products;
    },
  });
  return { data, isLoading, isError, error };
};

export const useDiscover = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";
  const currentSort = searchParams.get("sort") || "";
  const currentSearch = searchParams.get("search") || "";

  const queryParams = {
    filter: currentFilter !== "all" ? currentFilter : undefined,
    sort: currentSort || undefined,
    search: currentSearch || undefined,
  };

  const { data, isLoading } = useDiscoverProducts(queryParams);
  const displayProducts = data || [];

  const handleFilterClick = (filter) => {
    const params = new URLSearchParams(searchParams);
    if (filter === "all") {
      params.delete("filter");
      params.delete("sort");
      params.delete("search");
    } else {
      params.set("filter", filter);
    }
    setSearchParams(params);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  const handleSortClick = (sortType) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortType);
    setSearchParams(params);
  };

  return {
    currentFilter,
    currentSort,
    currentSearch,
    isLoading,
    displayProducts,
    handleFilterClick,
    handleSearchChange,
    handleSortClick,
  };
};
