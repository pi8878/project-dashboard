
// src/components/FolderItem.js
import React from 'react';

const FolderItem = ({ folder, selectFolder }) => {
    return (
        <li onClick={() => selectFolder(folder.id)}>
            {folder.name}
        </li>
    );
};

export default FolderItem;
