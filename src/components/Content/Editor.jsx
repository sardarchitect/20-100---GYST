import React, { useState, useEffect } from "react";
import { useSelectedProjectValue, useTasksValue } from "../../context";
import { FiCircle, FiTrash, FiPlus } from "react-icons/fi";

export const Editor = () => {
  const { tasks, setTasks } = useTasksValue();
  const { selectedProject } = useSelectedProjectValue();
  const [currentTasks, setCurrentTasks] = useState([]);

  useEffect(() => {
    const projectTasks = tasks.filter(task => task.projectId == selectedProject)
    setCurrentTasks(projectTasks);
    console.log(currentTasks);
  }, [selectedProject])

  return (
    <div className="editor">
      <div className="editor__display">
        <div className="editor__header">
          <strong>Project Name</strong>
        </div>

        <div className="editor__list-view">
          {currentTasks.map((task) => (
            <div key={task.docId} className="editor__list-item">
              <span>
                <FiCircle size="24px" />
              </span>
              <span>
                <div>{task.title}</div>
                <div className="editor__list-item__date">{task.dueDate}</div>
              </span>
              <span className="editor__list-item__delete">
                <FiTrash size="24px" />
              </span>
            </div>
          ))}

          <div className="editor__list-item">
            <span>
              <FiPlus size="24px" />
            </span>
            <span>
              <div>Add Items</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
