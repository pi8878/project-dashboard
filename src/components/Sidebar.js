// src/components/Sidebar.js
import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa';

const Sidebar = ({ folders, addFolder, selectFolder, deleteFolder }) => {
    const [newFolderName, setNewFolderName] = useState('');

    const handleAddFolder = () => {
        if (newFolderName.trim()) {
            addFolder(newFolderName.trim());
            setNewFolderName('');
        }
    };

    return (
        <aside className="sidebar">
            <h2>Folders</h2>
            <ul>
                {folders.map(folder => (
                    <li key={folder.id}>
                        <span onClick={() => selectFolder(folder.id)}>
                            {folder.name}
                        </span>
                        <button onClick={() => deleteFolder(folder.id)}>
                            <FaTrash/>
                        </button>
                        
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="New folder name"
            />
            <button onClick={handleAddFolder}>Add Folder</button>
        </aside>
    );
};

export default Sidebar;
