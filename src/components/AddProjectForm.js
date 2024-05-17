
// src/components/AddProjectForm.js
import React, { useState } from 'react';

const AddProjectForm = ({ addProject, selectedFolderId }) => {
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const handleAddProject = () => {
        if (projectTitle.trim() && projectDescription.trim()) {
            addProject(selectedFolderId, { title: projectTitle, description: projectDescription });
            setProjectTitle('');
            setProjectDescription('');
        }
    };

    return (
        <div className="add-project-form">
            <input
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="Project Title"
            />
            <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Project Description"
            ></textarea>
            <button onClick={handleAddProject}>Add Project</button>
        </div>
    );
};

export default AddProjectForm;
