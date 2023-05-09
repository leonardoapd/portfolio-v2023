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
                    skills.map((skill, index) => (
                        <figure className="skill_container" key={index}>
                            <img src={skill.image} alt="" className="skill_img"></img>
                            {/* <figcaption className="skill_name">{skill.name}</figcaption> */}
                        </figure>
                    ))
                }
            </section>
        </>

    );
}

export default AppWrapper(Skills, 'skills', 'skills')