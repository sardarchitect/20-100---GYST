import React, { useState } from "react";
import { FiCircle, FiTrash, FiXCircle } from "react-icons/fi";
import { db } from "../../../firebase";
export const TaskItem = ({ task }) => {

  const [archived, setArchived] = useState(false);

  const handleDelete = () => {
    db.collection("tasks")
      .doc(task.docId)
      .delete()
      .then(() => {
        console.log(task.title, "deleted");
      });
  };

  const toggleArchived = () => {
    setArchived(!archived);
    handleArchived(archived);
  }

  const handleArchived =(archived) => {
    db.collection("tasks")
      .doc(task.docId)
      .update({
        archived: archived,
      })
  }

  return (
    <div key={task.docId} className="editor__list-item">
      <span onClick={toggleArchived}>
        {
          task.archived ? <FiXCircle size="24px" /> : <FiCircle size="24px" />
        }
      </span>
      <span>
        <div>{task.title}</div>
        <div className="editor__list-item__date">{task.dueDate}</div>
      </span>
      <span className="editor__list-item__delete" onClick={handleDelete}>
        <FiTrash size="24px" />
      </span>
    </div>
  );
};
