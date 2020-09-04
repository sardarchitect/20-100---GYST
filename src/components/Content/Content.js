import React from "react";
import { Editor } from "./Editor/Editor";
import { Sidebar } from "./Sidebar/Sidebar";
import '../../stylesheets/_content.scss'

export const Content = ({ showSidebar }) => {
  return (
    <div className="content">
      <Sidebar showSidebar={showSidebar}/>
      <Editor />
    </div>
  );
};