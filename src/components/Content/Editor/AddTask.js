import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { useSelectedProjectValue } from "../../../context";
import { db } from "../../../firebase";

export const AddTask = () => {
  const [active, setActive] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const { selectedProject } = useSelectedProjectValue();

  useEffect(() => {
    setActive(false);
  }, [selectedProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: e.target[0].value,
      dueDate: e.target[1].value,
      projectId: selectedProject.projectId,
      archived: false,
    };
    addTask(newTask);
    setTitleInput("");
    e.target[1].value = "";
  };

  const addTask = (task) => {
    db.collection("tasks")
      .add({
        title: task.title,
        dueDate: task.dueDate,
        projectId: task.projectId,
        archived: task.archived,
      })
      .then(() => {
        console.log(task.projectId, "added");
      });
  };

  return (
    <>
      <div
        className="editor__list-item task-add"
        onClick={() => setActive(!active)}
      >
        <span>
          <FiPlus size="24px" />
        </span>
        <span>
          <div>Add Items</div>
        </span>
      </div>
      {active && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            placeholder="untitled"
          />
          <input type="date" />
          <button type="submit">Add Task</button>
        </form>
      )}
    </>
  );
};
