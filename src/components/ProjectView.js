
// src/components/ProjectView.js
import React from 'react';

const ProjectView = ({ project, closeProject }) => {
    return (
        <div className="project-view">
            <button onClick={closeProject} className="back-button">Back</button>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectView;
