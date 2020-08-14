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