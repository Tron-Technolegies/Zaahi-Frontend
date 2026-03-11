import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

export const useDetailPageQuantity = (stock = 10) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return { quantity, handleIncrease, handleDecrease };
};

export const useGetSingleProduct = (id) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await api.get(`/product/${id}`);
      return data;
    },
    enabled: !!id, 
  });

  return { isLoading, isError, data, error };
};
