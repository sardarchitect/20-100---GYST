import React, { useState } from "react";
import { FiTrash, FiCircle } from "react-icons/fi";
import { db } from "../../../firebase";
import { useSelectedProjectValue } from "../../../context";

export const ProjectListItem = ({ project }) => {
  const [hover, setHover] = useState(false);
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (project) => {
    if (window.confirm(`Do you wish to delete ${project.title}?`)) {
      db.collection("projects")
        .doc(project.docId)
        .delete()
        .then(() => {
          setSelectedProject("all");
        });
    }
  };
  return (
    <div
      className="sidebar__item__inner"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FiCircle />
      <span className="sidebar__label">{project.title}</span>
      {hover && (
        <span
          className="sidebar__delete"
          onClick={()=> deleteProject(project)}
        >
          <FiTrash />
        </span>
      )}
    </div>
  );
};
