
// src/components/ProjectList.js
import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects, ...props }) => {
    return (
        <div className="project-list">
            {projects.map(project => (
                <ProjectItem key={project.id} project={project} {...props} />
            ))}
        </div>
    );
};

export default ProjectList;
