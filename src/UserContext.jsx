import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [category, setCategory] = useState("ALL");

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, category, setCategory }}
    >
      {children}
    </UserContext.Provider>
  );
}
