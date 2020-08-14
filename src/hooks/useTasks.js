import { useState, useEffect } from "react";
import { db } from "../firebase";

// USETASKS: FETCH TASKS DATA FROM FIREBASE AND ADD TO TASKS //

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
  
    useEffect(() => {
      const unsubscribe = db.collection("tasks")
        .onSnapshot((snapshot) => {
          const tasksData = [];
          snapshot.forEach(doc =>
            tasksData.push({ ...doc.data(), docId: doc.id })
          );
          setTasks(tasksData);
        });
      return () => unsubscribe();
    }, []);
  
    return { tasks, setTasks };
  };