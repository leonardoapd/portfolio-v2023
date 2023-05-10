/* eslint-disable react-refresh/only-export-components */
import AppWrapper from "../../wrapper/AppWrapper";
import SkillsInformation from '../../assets/data/data.json';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Skills.css';


function Skills() {

    const skills = SkillsInformation.skills;

    const renderTooltip = (name) => (
        <Tooltip
            id="button-tooltip"
            style={
                {
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    borderRadius: 3,
                    padding: '2px 10px',
                }
            }
        >
            {name}
        </Tooltip>
    );

    return (
        <>
            <header>
                <h1 className="section__title">Skills</h1>
            </header>
            <section className="skills_container" aria-label="Skills">
                {
                    skills.map((skill, index) => (
                        <figure className="skill_container" key={index}>
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip(skill.name)}
                            >
                                <img src={skill.image} alt="" className="skill_img"></img>
                            </OverlayTrigger>
                            {/* <figcaption className="skill_name">{skill.name}</figcaption> */}
                        </figure>
                    ))
                }
            </section>
        </>

    );
}

export default AppWrapper(Skills, 'skills', 'skills')