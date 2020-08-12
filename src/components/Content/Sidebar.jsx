import React, { useState } from "react";
import {
  FiCalendar,
  FiInbox,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";
import { BsCalendar } from "react-icons/bs";
import { ProjectList } from "../ProjectList";
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(false);
  const toggleProjectList = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__generic">
        <div
          className={
            active === "inbox" ? "sidebar__item active" : "sidebar__item"
          }
          onClick={() => {
            setActive("inbox");
            setSelectedProject("inbox");
          }}
        >
          <FiInbox size="24px" />
          <span className="sidebar__label">Inbox</span>
        </div>
        <div
          className={
            active === "today" ? "sidebar__item active" : "sidebar__item"
          }
          onClick={() => {
            setActive("today");
            setSelectedProject("today");
          }}
        >
          <FiCalendar size="24px" />
          <span className="sidebar__label">Today</span>
        </div>
        <div
          className={
            active === "this-week" ? "sidebar__item active" : "sidebar__item"
          }
          onClick={() => {
            setActive("this-week");
            setSelectedProject("this-week");
          }}
        >
          <BsCalendar size="24px" />
          <span className="sidebar__label">This Week</span>
        </div>
      </div>

      <div className="sidebar__separator"></div>

      <div className="sidebar__projects">
        <div className="sidebar__item" onClick={toggleProjectList}>
          {showProjects ? (
            <FiChevronDown size="24px" />
          ) : (
            <FiChevronRight size="24px" />
          )}
          <span className="sidebar__label">
            <strong>Projects</strong>
          </span>
        </div>
      </div>

      {showProjects && (
        <ul>
          <ProjectList active={active} setActive={setActive}/>
          <AddProject />
        </ul>
      )}
    </div>
  );
};
