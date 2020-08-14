import React, {createContext, useContext, useState} from 'react'
import {useProjects, useTasks} from '../hooks';

// PROJECTS PROVIDER
export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children  }) => {
    const {projects, setProjects} = useProjects();
    return(
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    ); 
};
export const useProjectsValue = () => useContext (ProjectsContext);

// SELECTED PROJECT PROVIDER
export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children  }) => {
    const [selectedProject, setSelectedProject] = useState("all");
    return(
        <SelectedProjectContext.Provider value={{selectedProject, setSelectedProject}}>
            {children}
        </SelectedProjectContext.Provider>
    ); 
};
export const useSelectedProjectValue = () => useContext (SelectedProjectContext);

// TASKS PROVIDER
export const TasksContext = createContext();
export const TasksProvider = ({ children  }) => {
    const {tasks, setTasks} = useTasks();
    return(
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    ); 
};
export const useTasksValue = () => useContext (TasksContext);