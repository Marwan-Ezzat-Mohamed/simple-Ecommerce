import React, { useContext } from "react";
import { useLocalStorage } from "../components/common/Hooks/useStorage";

const CommonDataContext = React.createContext();

export function useData() {
  return useContext(CommonDataContext);
}

export function CommonDataProvider({ children }) {
  const [user, setUser] = useLocalStorage("currentUser", null);

  const value = {
    user,
    setUser,
  };

  return (
    <CommonDataContext.Provider value={value}>
      {children}
    </CommonDataContext.Provider>
  );
}
