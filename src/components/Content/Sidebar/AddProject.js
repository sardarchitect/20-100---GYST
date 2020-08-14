import React, { useState } from 'react';
import {  FiPlus,} from 'react-icons/fi';
import {db} from '../../../firebase'

export const AddProject = () => {
    const [active, setActive] = useState(false);
    const [title, setTitle] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        addProject(title);
        setTitle('');
        setActive(false);
    }

    const addProject = (title) => {
        const generateProjectId = Math.floor(Math.random()*100000);
        db.collection('projects')
            .add({
                projectId: generateProjectId,
                title:title,
            })
            .then(()=>{
                console.log(title,"added");
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
                        <input type='text' onChange={(e)=> setTitle(e.target.value)} placeholder="Untitled" value={title}/>
                        <button type='submit'>Add</button>
                    </form>
                </div>
            )
        }
      </li>
    )
}