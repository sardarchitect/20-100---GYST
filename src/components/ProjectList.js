import React, { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import { ProjectListItem } from "./ProjectListItem";

export const ProjectList = ({ active, setActive }) => {
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        className={
          active === project.projectId
            ? "active sidebar__item"
            : "sidebar__item"
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}
      >
          <ProjectListItem project={project} />
      </li>
    ))
  );
};
