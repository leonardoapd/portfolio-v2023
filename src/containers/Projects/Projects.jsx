/* eslint-disable react-refresh/only-export-components */
import ProjectsInformation from '../../assets/data/data.json';
import './Projects.css';
import AppWrapper from '../../wrapper/AppWrapper';

function Projects() {

    const projects = ProjectsInformation.projects;

    return (
        <>
            <header>
                <h1 className="section__title">Projects</h1>
            </header>

            <section className="projects_container" aria-label="projects">
                {
                    projects.map((project, index) => (
                        <article className="card shadow" key={index}>
                            <img src={project.image} alt="" className="card-img" />
                            <div className="card-content">
                                <h2 className="card-title">{project.name}</h2>
                                <p className="card-description">{project.description}</p>
                            </div>
                            <div className="card-footer project-links">
                                {project.github !== "" ?
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link code-link" aria-label='view code'>
                                        <span>View Code</span>
                                        <span className="material-icons-outlined link-icon">
                                            code
                                        </span>
                                    </a>
                                    : null}
                                {project.url !== "" ?
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link launch-link" aria-label='launch demo'>
                                        <span>Launch Demo</span>
                                        <span className="material-icons-outlined link-icon">
                                            rocket_launch
                                        </span>
                                    </a>
                                    : null}
                            </div>
                        </article>
                    ))}
            </section>
        </>
    );
}

export default AppWrapper(Projects, 'projects', 'projects');

