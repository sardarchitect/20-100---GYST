import React, {createContext, useContext, useState} from 'react'

// SELECTED PROJECT PROVIDER
export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children  }) => {
    const [selectedProject, setSelectedProject] = useState('');
    return(
        <SelectedProjectContext.Provider value={{selectedProject, setSelectedProject}}>
            {children}
        </SelectedProjectContext.Provider>
    ); 
};
export const useSelectedProjectValue = () => useContext (SelectedProjectContext);
