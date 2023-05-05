/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import ProjectsInformation from '../../assets/data/data.json';
import './Projects.css';
import AppWrapper from '../../wrapper/AppWrapper';
import HandleMovement from './HandleMovement';


function Projects() {

    const [currentIndexProject, setCurrentIndexProject] = useState(0);
    const projects = ProjectsInformation.projects;

    const { handleTouchStart, handleTouchEnd, handleTouchMove, nextProject, previousProject } = HandleMovement(currentIndexProject, projects, setCurrentIndexProject);

    return (
        <>
            {/* <section className="projects" id="projects"> */}
            <h2 className="section__title">Projects</h2>


            {/* <div className="projects_container"> */}

            <div
                className="project_container"
                onTouchStart={(e) => { handleTouchStart(e) }}
                onTouchEnd={(e) => { handleTouchEnd(e) }}
                onTouchMove={(e) => { handleTouchMove(e) }}
            >
                <h3 className="project_title">{projects[currentIndexProject].name}</h3>
                <div className="project_content">
                    <img
                        src={projects[currentIndexProject].image}
                        alt=""
                        className="projects_img"
                    >
                    </img>
                    <div className="project_data">
                        <p className="project_description">{projects[currentIndexProject].description}</p>
                        <div className="project_buttons">
                            <button
                                className="project_button project_button__code"
                                onClick={() => { window.open(projects[currentIndexProject].github, '_blank') }}
                                onTouchStart={() => { window.open(projects[currentIndexProject].github, '_blank') }}
                            >
                                View Code
                                <i className="material-icons-outlined">
                                    code
                                </i>
                            </button>
                            <button
                                className="project_button project_button__view"
                                onClick={() => { window.open(projects[currentIndexProject].url, '_blank') }}
                                onTouchStart={() => { window.open(projects[currentIndexProject].url, '_blank') }}
                            >
                                Launch Project
                                <i className="material-icons-outlined">
                                    rocket_launch
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* </div> */}

            <div className="projects_navigation">
                <button
                    className="projects_navigation__button"
                    onClick={() => { previousProject() }}>
                    <i className="material-icons-outlined">
                        arrow_back_ios
                    </i>
                </button>
                <button
                    className="projects_navigation__button"
                    onClick={() => { nextProject() }}>
                    <i className="material-icons-outlined">
                        arrow_forward_ios
                    </i>
                </button>
            </div>



            {/* </section> */}
        </>
    );
}

export default AppWrapper(Projects, 'projects', 'projects');

