import React, {createContext, useContext} from 'react'
import {useTasks} from '../hooks';

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