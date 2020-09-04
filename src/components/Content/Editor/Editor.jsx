import React, { useState, useEffect } from "react";
import { useSelectedProjectValue, useTasksValue } from "../../../context";
import moment from "moment";
import { AddTask } from "./AddTask";
import { TaskItem } from "./TaskItem";
import { BsThreeDots } from "react-icons/bs";
import { db } from "../../../firebase";
import "../../../stylesheets/_editor.scss";

export const Editor = () => {
  const [currentTasks, setCurrentTasks] = useState([]);
  const { tasks } = useTasksValue();
  const { selectedProject } = useSelectedProjectValue();
  const [editProjectMenu, setEditProjectMenu] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [projectNameUpdate, setProjectNameUpdate] = useState("");
  const [title, setTitle] = useState('');
  useEffect(() => {
    setTitle(selectedProject.title)
    setProjectNameUpdate(selectedProject.title)
    const today = moment().format("ll");
    let filteredTasks = [];

    switch (selectedProject.projectId) {
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
          (task) => task.projectId === selectedProject.projectId
        );
        setCurrentTasks(filteredTasks);
        break;
    }
  }, [selectedProject, tasks, selectedProject.title]);

  useEffect(()=>{
    setTitle(selectedProject.title);
  },[title])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedProject);
    db.collection("projects")
      .doc(selectedProject.docId)
      .update({
        title: projectNameUpdate,
      })
      .then(() => {
        console.log(selectedProject.projectId, "updated");
      });
    setEditProjectMenu(false);
    setEditProject(false);
    setProjectNameUpdate("");
  };

  return (
    <div className="editor">
      <div className="editor__display">
        {/* EDITOR HEADER */}
        <div className="editor__header">
          <strong>{title}</strong>
          <BsThreeDots
            id="edit-project-dropdown-btn"
            onClick={() => setEditProjectMenu(!editProjectMenu)}
          />
        </div>
        {editProjectMenu && (
          <div id="edit-project-dropdown">
            <p
              id="edit-project-btn"
              onClick={() => {
                setEditProject(!editProject);
                setEditProjectMenu(false);
              }}
            >
              Edit Project
            </p>
            <hr />
            <p id="show-archived-btn">Show Archived Tasks</p>
          </div>
        )}

        {editProject && (
          <div className="window">
            <div className="edit-project-window">
              <p className="close-window" onClick={()=>setEditProject(!editProject)}> X </p>
              <h3>Edit Project</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={projectNameUpdate}
                  onChange={(e) => setProjectNameUpdate(e.target.value)}
                />
                <button type="submit"> Update Name </button>
                <button id="delete-project-btn"> Delete Project </button>
              </form>
            </div>{" "}
          </div>
        )}

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
