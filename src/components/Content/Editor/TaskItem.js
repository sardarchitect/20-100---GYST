import React, { useState } from "react";
import { FiCircle, FiTrash, FiXCircle } from "react-icons/fi";
import { db } from "../../../firebase";
import { BsThreeDots } from "react-icons/bs";

export const TaskItem = ({ task }) => {
  const [archived, setArchived] = useState(false);
  const [hover, setHover] = useState(false);
  const [editTaskMenu, setEditTaskMenu] = useState(false)
  const [editTask, setEditTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();

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
  };

  const handleArchived = (archived) => {
    db.collection("tasks").doc(task.docId).update({
      archived: archived,
    });
  };
  const handleTaskUpdate = (e) => {
    e.preventDefault();
    db.collection('tasks')
      .doc(task.docId)
      .update({
        title: newTaskTitle,
        dueDate: newTaskDate
      })
      setEditTask(false);
  }

  return (
    <div key={task.docId} className={task.archived ? "editor__list-item archived" : "editor__list-item"} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
      <span className="editor__list-item__archived" onClick={toggleArchived}>
        {task.archived ? <FiXCircle size="24px" /> : <FiCircle size="24px" />}
      </span>
      <span>
        <div>{task.title}</div>
        <div className="editor__list-item__date">{task.dueDate}</div>
      </span>
      {hover && (
        <span className="editor__list-item-edit-menu" onClick={()=>setEditTaskMenu(!editTaskMenu)}>
          <BsThreeDots size="24px" />
        </span>
      )}
      {
        editTaskMenu && (
          <div id="edit-task-dropdown">
            <p>Edit Task</p>
            <hr />
            <p>Delete Task</p>
          </div>
        )
      }
      {
        editTask && (
          <div className="edit-task">
            <div className="close-window" onClick={() => setEditTask(!editTask)}>
              X
            </div>
            <h3>Edit Task</h3>
            <form onSubmit={handleTaskUpdate}>
              <input value={newTaskTitle} onChange={(e)=>setNewTaskTitle(e.target.value)}/>
              <input type="date" value={newTaskDate} onChange={(e)=>setNewTaskDate(e.target.value)} />
              <button type="submit">Update Task</button>
              <button onClick={handleDelete}>Delete Task</button>
            </form>
          </div>
        )
      }
    </div>
  );
};
