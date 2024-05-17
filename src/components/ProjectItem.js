
// src/components/ProjectItem.js
import React, { useState, useRef, useEffect } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const ProjectItem = ({ project, openProject, deleteProject, renameProject, moveProject, folders }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [newName, setNewName] = useState(project.title);
    const dropdownRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleRename = () => {
        renameProject(project.id, newName);
        setShowDropdown(false);
    };

    return (
        <div className="project-item" onClick={() => openProject(project.id)}>
            <h2>{project.title}</h2>
            <button onClick={(e) => { e.stopPropagation(); setShowDropdown(!showDropdown); }}>
                <FaEllipsisV />
            </button>
            {showDropdown && (
                <div className="dropdown-menu" ref={dropdownRef}>
                    <button onClick={(e) => { e.stopPropagation(); openProject(project.id); }}>Open</button>
                    <button onClick={(e) => { e.stopPropagation(); deleteProject(project.id); }}>Delete</button>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button onClick={(e) => { e.stopPropagation(); handleRename(); }}>Rename</button>
                    <select onChange={(e) => moveProject(project.id, e.target.value)} onClick={(e) => e.stopPropagation()}>
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
