import React from "react";
import { Editor } from "./Editor";
import { Sidebar } from "./Sidebar";

export const Content = ({ showSidebar }) => {
  return (
    <div className="content">
      {showSidebar && <Sidebar />}
      <Editor />
    </div>
  );
};