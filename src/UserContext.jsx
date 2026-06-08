import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [category, setCategory] = useState("ALL");
  const [currency, setCurrency] = useState("AED");
  const [exchange, setExchange] = useState(null);
  const [shippingRate, setShippingRate] = useState(null);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        category,
        setCategory,
        currency,
        setCurrency,
        exchange,
        setExchange,
        shippingRate,
        setShippingRate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
