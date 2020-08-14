import React from "react";
import { Editor } from "./Editor/Editor";
import { Sidebar } from "./Sidebar/Sidebar";

export const Content = ({ showSidebar }) => {
  return (
    <div className="content">
      {showSidebar && <Sidebar />}
      <Editor />
    </div>
  );
};