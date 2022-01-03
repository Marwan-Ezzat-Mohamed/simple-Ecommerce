import React, { useContext, useState, useEffect } from "react";
import { useLocalStorage } from "../components/common/Hooks/useStorage";

const CommonDataContext = React.createContext();

export function useData() {
  return useContext(CommonDataContext);
}

export function CommonDataProvider({ children }) {
  const [user, setUser] = useLocalStorage("currentUser", null);
  const [carts, setCarts] = useLocalStorage("carts", []);
  const [orders, setOrders] = useLocalStorage("orders", []);

  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    if (user?.id) {
      const currentUserCart = carts?.filter((cart) => cart.userId === user.id);

      //compare currentUserCart with userCart to see if there are any changes
      if (
        JSON.stringify(currentUserCart[0]?.cart ?? []) !==
        JSON.stringify(userCart)
      ) {
        setUserCart(currentUserCart[0]?.cart ?? []);
      } else return;
    }
  }, [user]);

  useEffect(() => {
    if (user?.id) {
      setCarts((old) => [
        ...old?.filter((cart) => cart.userId !== user.id),
        { cart: userCart, userId: user.id },
      ]);
    }
  }, [userCart]);

  const value = {
    user,
    setUser,
    orders,
    setOrders,
    userCart,
    setUserCart,
  };

  return (
    <CommonDataContext.Provider value={value}>
      {children}
    </CommonDataContext.Provider>
  );
}
