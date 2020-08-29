import { useState, useEffect } from "react";
import { auth } from "../firebase";

// USECURRENTUSER: SETS CURRENT USER THROUGH OBSERVER //

export const useAuth = () => {
  const [currentAuth, setCurrentAuth] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentAuth);
  }, []);

  return { currentAuth, setCurrentAuth };
};
