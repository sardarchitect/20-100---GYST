import React, { useState } from "react";
import { Header } from "./components/Header";
import { Content } from "./components/Content/Content";
import { ProjectsProvider, SelectedProjectProvider, TasksProvider } from './context';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <TasksProvider>
        <div className="App">
          <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Content showSidebar={showSidebar} />
        </div>
        </TasksProvider>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;