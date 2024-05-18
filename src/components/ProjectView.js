// src/components/ProjectView.js
import React, { useState, useEffect, useRef } from 'react';

const ProjectView = ({ project, closeProject, saveProjectContent }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(project.description);
    const textareaRef = useRef(null);

    const handleSave = () => {
        saveProjectContent(project.id, editedContent);
        setIsEditing(false);
    };

    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scroll height
        }
    }, [isEditing, editedContent]);

    return (
        <div className="project-view">
            <button onClick={closeProject} className="btn btn-primary mb-3">Back</button>
            <h1>{project.title}</h1>
            {isEditing ? (
                <div>
                    <label>Edit Content:</label>
                    <textarea
                        ref={textareaRef}
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        className="form-control"
                        aria-label="Edit Content"
                        rows="10"
                        style={{ resize: 'both', width: '100%', minHeight: '100px', overflow: 'auto' }}
                    />
                    <button onClick={handleSave} className="btn btn-success me-2">Save</button>
                    <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Cancel</button>
                </div>
            ) : (
                <div>
                    <p>{project.description}</p>
                    <button onClick={() => setIsEditing(true)} className="btn btn-primary">Edit Content</button>
                </div>
            )}
        </div>
    );
};

export default ProjectView;
