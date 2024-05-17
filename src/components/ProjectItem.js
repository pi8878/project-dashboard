// src/components/ProjectItem.js
import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const ProjectItem = ({ project, openProject, deleteProject, renameProject, moveProject, folders }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [newName, setNewName] = useState(project.title);

    const handleRename = () => {
        renameProject(project.id, newName);
        setShowDropdown(false);
    };

    return (
        <div className="project-item">
            <h2>{project.title}</h2>
            <button onClick={() => setShowDropdown(!showDropdown)}>
                <FaEllipsisV />
            </button>
            {showDropdown && (
                <div className="dropdown-menu">
                    <button onClick={() => openProject(project.id)}>Open</button>
                    <button onClick={() => deleteProject(project.id)}>Delete</button>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button onClick={handleRename}>Rename</button>
                    <select onChange={(e) => moveProject(project.id, e.target.value)}>
                        <option value="">Move to...</option>
                        {folders.map(folder => (
                            <option key={folder.id} value={folder.id}>{folder.name}</option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default ProjectItem;
