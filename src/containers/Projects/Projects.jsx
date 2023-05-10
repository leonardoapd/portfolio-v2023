/* eslint-disable react-refresh/only-export-components */
import ProjectsInformation from '../../assets/data/data.json';
import './Projects.css';
import AppWrapper from '../../wrapper/AppWrapper';
// Dependencies for Swiper component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Projects() {

    const projects = ProjectsInformation.projects;

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <>
            <header>
                <h1 className="section__title">Projects</h1>
            </header>

            <Swiper
                grabCursor={true}
                spaceBetween={30}

                pagination={pagination}
                modules={[Pagination]}
                className="project_container"
            >
                {
                    projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <h3 className="project_title">{project.name}</h3>
                            <article className="project_content">
                                <img
                                    src={project.image}
                                    alt=""
                                    className="projects_img"
                                >
                                </img>
                                <section className="project_data" aria-label="Project Data">
                                    <p className="project_description">{project.description}</p>
                                    <div className="project_buttons">
                                        <button
                                            className="project_button project_button__code"
                                            onClick={() => { window.open(project.github, '_blank') }}
                                            onTouchStart={() => { window.open(project.github, '_blank') }}
                                        >
                                            View Code
                                            <i className="material-icons-outlined">
                                                code
                                            </i>
                                        </button>
                                        <button
                                            className="project_button project_button__view"
                                            onClick={() => { window.open(project.url, '_blank') }}
                                            onTouchStart={() => { window.open(project.url, '_blank') }}
                                        >
                                            Launch Project
                                            <i className="material-icons-outlined">
                                                rocket_launch
                                            </i>
                                        </button>
                                    </div>
                                </section>
                            </article>
                        </SwiperSlide>
                    ))}
            </Swiper >
        </>
    );
}

export default AppWrapper(Projects, 'projects', 'projects');

