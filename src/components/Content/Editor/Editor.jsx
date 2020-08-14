import React, { useState, useEffect } from "react";
import { useSelectedProjectValue, useTasksValue } from "../../../context";
import moment from "moment";
import { AddTask } from "./AddTask";
import { TaskItem } from "./TaskItem";

export const Editor = () => {
  const [currentTasks, setCurrentTasks] = useState([]);
  const { tasks } = useTasksValue();
  const { selectedProject } = useSelectedProjectValue();


  useEffect(() => {
    
    const today = moment().format("ll");
    let filteredTasks = [];

    switch (selectedProject) {
      case "all":
        setCurrentTasks(tasks);
        break;
      case "today":
        filteredTasks = tasks.filter(
          (task) => moment(task.dueDate).format("ll") === today
        );
        setCurrentTasks(filteredTasks);
        break;
      case "this-week":
        filteredTasks = tasks.filter(
          (task) => moment(task.dueDate, "ll").diff(today) <= 7
        );
        setCurrentTasks(filteredTasks);
        break;
      default:
        filteredTasks = tasks.filter(
          (task) => task.projectId === (selectedProject)
        );
        setCurrentTasks(filteredTasks);
        break;
    }
  }, [selectedProject, tasks]);
    
  return (
    <div className="editor">
      <div className="editor__display">
        {/* EDITOR HEADER */}
        <div className="editor__header">
          <strong>{selectedProject}</strong>
        </div>
        {/* EDITOR LIST */}
        <div className="editor__list-view">
          {currentTasks.map((task) => (
            <TaskItem key={task.docId} task={task} />
          ))}
          <AddTask />
        </div>
      </div>
    </div>
  );
};
