/* eslint-disable react-refresh/only-export-components */
import AppWrapper from "../../wrapper/AppWrapper";
import "./About.css";

function About() {
    return (
        <>
            <section id="about" className="about">
                <div className="about-container">
                    <h1 className="section__title about-name" >Leonardo Perdomo</h1>
                    <h2 className="section__subtitle">Full Stack Software Developer</h2>
                    <p className="about-description">
                        I am a passionate Full Stack Software Developer with a background in the Telecommunications
                        Field. I have experience in developing web applications using JavaScript, React, and Java. I
                        am a quick learner and I am always looking to improve my skills.
                        I characterize myself for having great skills when it comes to communication and teamwork.
                    </p>
                </div>
            </section>
        </>
    );
}

export default AppWrapper(About, "about", "about");