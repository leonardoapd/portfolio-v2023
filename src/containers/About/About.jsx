/* eslint-disable react-refresh/only-export-components */
import AppWrapper from "../../wrapper/AppWrapper";
import "./About.css";
import { images } from "../../constants/images";

function About() {
    return (
        <>
            <header>
                <h1 id="about-heading" className="about__name section__title">
                    Leonardo Perdomo
                </h1>
            </header>
            <main className="about__container">
                <figure className="about__image">
                    <img src={images.online_page} alt="Profile Image" />
                </figure>
                <section>
                    <h2 className="about__subtitle section__subtitle">
                        Full Stack Software Developer
                    </h2>
                    <p className="about__description">
                        With a keen eye for detail and a dedication to delivering high-quality code, I am committed to creating web experiences that not only meet client requirements but also exceed user expectations. I continuously seek opportunities to learn and grow, embracing new technologies and adopting industry best practices to ensure the applications I develop are scalable, secure, and maintainable.
                    </p>
                </section>
            </main>
        </>
    );
}

export default AppWrapper(About, "about", "about");