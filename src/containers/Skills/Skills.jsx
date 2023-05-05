import AppWrapper from "../../wrapper/AppWrapper";
import SkillsInformation from '../../assets/data/data.json';
import './Skills.css';


function Skills() {

    const skills = SkillsInformation.skills;

    return (
        <>
            <h2 className="section__title">Skills</h2>
            <div className="skills_container">
                {
                    skills.map((skill, index) => (
                        <img key={index} src={skill.image} alt="" className="skills_img"></img>
                    ))
                }
            </div>
        </>

    );
}

export default AppWrapper(Skills, 'skills', 'skills')