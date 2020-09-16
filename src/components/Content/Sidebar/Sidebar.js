import React from 'react'
import { FiMenu } from 'react-icons/fi';
import '../../stylesheets/_sidebar.scss';

export const Sidebar = () => {
    return(
        <div className="sidebar">
            <span id="toggle">
                <FiMenu size="24px"/>
            </span>
            <div className="projects">
                <p>Project 1</p>
                <p>Project 2</p>
                <p>Project 3</p>
                <p>Project 4</p>
            </div>
        </div>
    )
}