/* eslint-disable react-refresh/only-export-components */
import AppWrapper from '../../wrapper/AppWrapper';
import SkillsInformation from '../../assets/data/data.json';
import './Skills.css';
import images  from '../../constants/images';

function Skills() {
	const skills = SkillsInformation.skills;

	return (
		<>
			<h2 className='section__title'>Skills</h2>

			<section className='skills_container' aria-label='Skills'>
				<ul className='skills_list'>
					{skills.map((skill, index) => (
						<li className='skills_item' key={index}>
							<h3 className='skills_title'>{skill.category}</h3>
							<p className='skills_description'>
								{' '}
								{skill.description}
							</p>
							<ul className='skills_sublist'>
								{skill.technologies.map(
									(technology, techIndex) => (
										<li
											className='technology_item'
											key={techIndex}
										>
											<img
												src={images[technology.image]}
												alt={technology.name}
											/>
											<span className='technology_name'>
												{technology.name}
											</span>
										</li>
									)
								)}
							</ul>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}

export default AppWrapper(Skills, 'skills', 'skills');
