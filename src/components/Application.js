import React, { useState } from "react";

import {
  ProjectsProvider,
  SelectedProjectProvider,
  TasksProvider,
  CurrentUserProvider,
} from "../context";

import { Header } from "./header/Header";
import { Content } from "./content/Content";

export const Application = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <CurrentUserProvider>
      <SelectedProjectProvider>
        <ProjectsProvider>
          <TasksProvider>
            <div className="App">
              <Header
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
              <Content showSidebar={showSidebar} />
            </div>
          </TasksProvider>
        </ProjectsProvider>
      </SelectedProjectProvider>
    </CurrentUserProvider>
  );
};
