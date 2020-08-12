import { useState, useEffect } from "react";
import {firebase} from "../firebase";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("tasks")
      .get()
      .then(snapshot => {
          const allTasks = snapshot.docs.map(task => ({
              ...task.data(),
              docId: task.id,
          }));
          if(JSON.stringify(allTasks) !== JSON.stringify(tasks)) {
            setTasks(allTasks);
          }
      });
  }, [tasks]);
  return {tasks, setTasks};
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .get()
      .then(snapshot => {
          const allProjects = snapshot.docs.map(project => ({
              ...project.data(),
              docId: project.id,
          }));
          if(JSON.stringify(allProjects) !== JSON.stringify(projects)) {
            setProjects(allProjects);
          }
      });
  }, [projects]);
  return {projects, setProjects};
};