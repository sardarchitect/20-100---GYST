import React from "react";
import { TimeTracker } from "./TimeTracker";
import "../stylesheets/_sandbox.scss";


export const Sandbox = () => {
  return (
    <div className="sandbox">
      <div className="header">
        <h1>Sandbox</h1>
        <h3>Experimenting with Life Organizing</h3>
      </div>
      <TimeTracker />
    </div>
  );
};
