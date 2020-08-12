import React, { useState } from "react";
import { FiTrash, FiCircle } from "react-icons/fi";
import { firebase } from "../firebase";
import { useSelectedProjectValue, useProjectsValue } from "../context";

export const ProjectListItem = ({ project }) => {
  const [hover, setHover] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    console.log(project.docId, "deleted");
    if (window.confirm(`Do you wish to delete ${docId}?`)) {
      firebase
        .firestore()
        .collection("projects")
        .doc(docId)
        .delete()
        .then(() => {
          setProjects([...projects]);
          setSelectedProject("inbox");
        });
    } else {
      return;
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
          onClick={()=> deleteProject(project.docId)}
        >
          <FiTrash />
        </span>
      )}
    </div>
  );
};
