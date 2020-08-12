import React, { useState } from 'react';
import {  FiPlus,} from 'react-icons/fi';
import { useProjectsValue } from '../context';
import {firebase} from '../firebase'
export const AddProject = () => {
    const [active, setActive] = useState(false);
    const [projectName, setProjectName] = useState('')
    const {projects, setProjects} = useProjectsValue();

    const handleSubmit=(e)=>{
        e.preventDefault();
        addProject(projectName);
        setProjectName('');
        setActive(false);
    }
    const addProject = (title) => {
        const projectId = Math.floor(Math.random()*1000);
        firebase
            .firestore()
            .collection('projects')
            .add({
                projectId,
                title:title,
            })
            .then(()=>{
                setProjects([...projects]);
            })
    }
    return(
        <li className="sidebar__add">
        <div className="sidebar__item" onClick={()=> setActive(!active)}>
          <FiPlus />
          <span className="sidebar__label">Add Project</span>
        </div>
        {
            active && (
                <div className="sidebar__add-form">
                    <form onSubmit={handleSubmit}>
                        <input type='text' onChange={(e)=> setProjectName(e.target.value)} placeholder="Untitled" value={projectName}/>
                        <button type='submit'>Add</button>
                    </form>
                </div>
            )
        }
      </li>
    )
}