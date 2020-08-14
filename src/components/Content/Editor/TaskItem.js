import React from "react";
import { FiCircle, FiTrash } from "react-icons/fi";
import { db } from "../../../firebase";
export const TaskItem = ({ task }) => {
  
  const handleClick = () => {
    db.collection("tasks")
      .doc(task.docId)
      .delete()
      .then(() => {
        console.log(task.title, "deleted");
      });
  };

  return (
    <div key={task.docId} className="editor__list-item">
      <span>
        <FiCircle size="24px" />
      </span>
      <span>
        <div>{task.title}</div>
        <div className="editor__list-item__date">{task.dueDate}</div>
      </span>
      <span className="editor__list-item__delete" onClick={handleClick}>
        <FiTrash size="24px" />
      </span>
    </div>
  );
};
