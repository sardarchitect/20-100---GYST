import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { useSelectedProjectValue } from "../../../context";
import { db, auth } from "../../../firebase";
import { BsThreeDots } from "react-icons/bs";

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
    setActive(false)
  };

  const addTask = (task) => {
    db.collection("tasks")
      .add({
        title: task.title,
        dueDate: task.dueDate,
        projectId: task.projectId,
        archived: task.archived,
        uid: auth.currentUser.uid
      })
      .then(() => {
        console.log(task.projectId, "added");
      });
  };

  return (
    <div>
      {active ? (
        <div className="editor__list-item" id="add-task-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              placeholder="New Task Description"
            />
            <input type="date" />
            <button type="submit">Add Task</button>
            <button onClick={() => setActive(false)}>Cancel</button>
          </form>
        </div>
      ) : (
        <div
          className="editor__list-item add-task"
          onClick={() => setActive(!active)}
        >
          <span>
            <FiPlus size="24px" />
          </span>
          <span>
            <div>Add Items</div>
          </span>
        </div>
      )}
    </div>
  );
};
