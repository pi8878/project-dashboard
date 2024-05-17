
// src/components/FolderList.js
import React from 'react';
import FolderItem from './FolderItem';

const FolderList = ({ folders, selectFolder }) => {
    return (
        <ul className="folder-list">
            {folders.map(folder => (
                <FolderItem key={folder.id} folder={folder} selectFolder={selectFolder} />
            ))}
        </ul>
    );
};

export default FolderList;
