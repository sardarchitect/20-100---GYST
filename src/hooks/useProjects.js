import { useState, useEffect } from "react";
import { db } from "../firebase";

// USEPROJECTS: FETCH PROJECTS DATA FROM FIREBASE AND ADD TO PROJECTS //

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      const unsubscribe = db.collection("projects")
        .onSnapshot((snapshot) => {
          const projectsData = [];
          snapshot.forEach(doc =>
            projectsData.push({ ...doc.data(), docId: doc.id })
          );
          setProjects(projectsData);
        });
      return () => unsubscribe();
    }, []);
    return { projects, setProjects };
  };