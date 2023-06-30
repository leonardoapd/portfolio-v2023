/* eslint-disable react-refresh/only-export-components */
import AppWrapper from "../../wrapper/AppWrapper";
import SkillsInformation from '../../assets/data/data.json';
import './Skills.css';


function Skills() {

    const skills = SkillsInformation.skills;


    return (
        <>
            <header>
                <h1 className="section__title">Skills</h1>
            </header>
            <section className="skills_container" aria-label="Skills">
                {
                    Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="skills_category_container">
                            <h2 className="skills_category section__subtitle">{category}</h2>
                            <div className="skills_list_container">
                                {
                                    skillList.map((skill, index) => (
                                        <figure className="skill__figure_container" key={index}>
                                            <img src={skill.image} alt="" className="skill_img shadow" />
                                            <figcaption className="skill_description">{skill.name}</figcaption>
                                        </figure>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </section>
        </>

    );
}

export default AppWrapper(Skills, 'skills', 'skills')