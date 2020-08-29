import React, { createContext, useContext } from "react";
import { useCurrentUser } from "../hooks";

// CURRENT USER PROVIDER
export const CurrentUserContext = createContext();
export const CurrentUserProvider = ({ children }) => {
  const { currentUser, setCurrentUser } = useCurrentUser();
  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
export const useCurrentUserValue = () => useContext(CurrentUserContext);
