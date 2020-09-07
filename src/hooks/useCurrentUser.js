import { useState, useEffect } from "react";
import { db, auth } from "../firebase";

// USECURRENTUSER: SETS CURRENT USER THROUGH OBSERVER

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (auth.currentUser) {
      db
        .collection("users")
        .where("uid", "==", auth.currentUser.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach( (doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            setCurrentUser(doc.data());
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    }
  }, []);

  return { currentUser };
};
