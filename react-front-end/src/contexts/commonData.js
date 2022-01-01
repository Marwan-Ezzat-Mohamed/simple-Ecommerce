import React, { useContext } from "react";
import { useLocalStorage } from "../components/common/Hooks/useStorage";

const CommonDataContext = React.createContext();

export function useData() {
  return useContext(CommonDataContext);
}

export function CommonDataProvider({ children }) {
  const [user, setUser] = useLocalStorage("currentUser", null);
  const [cart, setCart] = useLocalStorage("cart", []);

  const value = {
    user,
    setUser,
    cart,
    setCart,
  };

  return (
    <CommonDataContext.Provider value={value}>
      {children}
    </CommonDataContext.Provider>
  );
}
