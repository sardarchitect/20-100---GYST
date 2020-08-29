import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import {BsCircle, BsCircleFill} from 'react-icons/bs';
import { db } from "../../../firebase";
import { useSelectedProjectValue } from "../../../context";
import {genericProjects} from '../../../constants';

export const ProjectListItem = ({ active, project }) => {
  const [hover, setHover] = useState(false);
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (project) => {
    if (window.confirm(`Do you wish to delete ${project.title}?`)) {
      db.collection("projects")
        .doc(project.docId)
        .delete()
        .then(() => {
          setSelectedProject(genericProjects[0]);
        });
    }
  };
  return (
    <div
      className="sidebar__item__inner"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {
        active === project.projectId ? <BsCircleFill /> : <BsCircle />
      }
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
