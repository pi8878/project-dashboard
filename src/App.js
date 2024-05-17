
// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';

const App = () => {
    const [folders, setFolders] = useState([{ id: 1, name: 'Default Folder' }]);
    const [projects, setProjects] = useState([]);
    const [selectedFolderId, setSelectedFolderId] = useState(1);

    const addFolder = (name) => {
        setFolders([...folders, { id: Date.now(), name }]);
    };

    const selectFolder = (id) => {
        setSelectedFolderId(id);
    };

    const addProject = (folderId, project) => {
        setProjects([...projects, { ...project, id: Date.now(), folderId }]);
    };

    const openProject = (id) => {
        alert(`Open project with id: ${id}`);
    };

    const deleteProject = (id) => {
        setProjects(projects.filter(project => project.id !== id));
    };

    const renameProject = (id, newName) => {
        setProjects(projects.map(project => 
            project.id === id ? { ...project, title: newName } : project
        ));
    };

    const moveProject = (projectId, newFolderId) => {
        setProjects(projects.map(project =>
            project.id === projectId ? { ...project, folderId: parseInt(newFolderId, 10) } : project
        ));
    };

    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <Sidebar folders={folders} addFolder={addFolder} selectFolder={selectFolder} />
                <div className="content">
                    <h2>Projects in {folders.find(folder => folder.id === selectedFolderId)?.name}</h2>
                    <AddProjectForm addProject={addProject} selectedFolderId={selectedFolderId} />
                    <ProjectList
                        projects={projects.filter(project => project.folderId === selectedFolderId)}
                        openProject={openProject}
                        deleteProject={deleteProject}
                        renameProject={renameProject}
                        moveProject={moveProject}
                        folders={folders}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
