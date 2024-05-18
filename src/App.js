
// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import ProjectView from './components/ProjectView';

const App = () => {
    const [folders, setFolders] = useState([{ id: 1, name: 'Default Folder' }]);
    const [projects, setProjects] = useState([]);
    const [selectedFolderId, setSelectedFolderId] = useState(1);
    const [openedProject, setOpenedProject] = useState(null);

    const addFolder = (name) => {
        setFolders([...folders, { id: Date.now(), name }]);
    };

    const selectFolder = (id) => {
        setSelectedFolderId(id);
        setOpenedProject(null);
    };

    const addProject = (folderId, project) => {
        setProjects([...projects, { ...project, id: Date.now(), folderId }]);
    };

    const openProject = (id) => {
        const project = projects.find(project => project.id === id);
        setOpenedProject(project);
    };

    const closeProject = () => {
        setOpenedProject(null);
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

    const deleteFolder = (id) => {
        const folderHasProjects = projects.some(project => project.folderId === id);
        if (!folderHasProjects) {
            setFolders(folders.filter(folder => folder.id !== id));
            if (selectedFolderId === id) {
                setSelectedFolderId(folders[0]?.id || null);
            }
        } else {
            alert('Cannot delete a folder that contains projects.');
        }
    };

    const saveProjectContent = (id, content) => {
        const updatedProjects = projects.map(project =>
            project.id === id ? { ...project, description: content } : project
        );
        setProjects(updatedProjects);

        // Update the currently opened project
        const updatedProject = updatedProjects.find(project => project.id === id);
        setOpenedProject(updatedProject);
    };

    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <Sidebar
                    folders={folders}
                    addFolder={addFolder}
                    selectFolder={selectFolder}
                    deleteFolder={deleteFolder}
                />
                <div className="content">
                    {openedProject ? (
                        <ProjectView project={openedProject} closeProject={closeProject} saveProjectContent={saveProjectContent} />
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
