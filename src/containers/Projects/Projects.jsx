/* eslint-disable react-refresh/only-export-components */
import ProjectsInformation from '../../assets/data/data.json';
import './Projects.css';
import AppWrapper from '../../wrapper/AppWrapper';

function Projects() {
	const projects = ProjectsInformation.projects;

	return (
		<>
			<h2 className='section__title'>Projects</h2>

			<section className='projects_container' aria-label='projects'>
				<ul className='projects_list'>
					{projects.map((project, index) => (
						<li className='project_item' key={index}>
							<article className='card shadow'>
								<img
									src={project.image}
									alt=''
									className='card-img'
								/>
								<div className='card-content'>
									<h2 className='card-title'>
										{project.name}
									</h2>
									<p className='card-description'>
										{project.description}
									</p>
								</div>
								<div className='card-footer project-links'>
									{project.github !== '' ? (
										<a
											href={project.github}
											target='_blank'
											rel='noopener noreferrer'
											className='project-link code-link'
											aria-label='view code'
										>
											<span>View Code</span>
											<i
												className='material-icons-outlined link-icon'
												aria-hidden='true'
											>
												code
											</i>
										</a>
									) : null}
									{project.url !== '' ? (
										<a
											href={project.url}
											target='_blank'
											rel='noopener noreferrer'
											className='project-link launch-link'
											aria-label='launch demo'
										>
											<span>Launch Demo</span>
											<i
												className='material-icons-outlined link-icon'
												aria-hidden='true'
											>
												rocket_launch
											</i>
										</a>
									) : null}
								</div>
							</article>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}

export default AppWrapper(Projects, 'projects', 'projects');
