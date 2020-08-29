import React, { createContext, useContext } from "react";
import { useAuth } from "../hooks";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const { currentAuth, setCurrentAuth } = useAuth();

  return (
    <AuthContext.Provider value={{ currentAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthValue = () => useContext(AuthContext);
