import { useState } from "react";

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
