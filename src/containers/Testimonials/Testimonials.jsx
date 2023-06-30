/* eslint-disable react-refresh/only-export-components */
import TestimonialsInformation from '../../assets/data/data.json';
import AppWrapper from '../../wrapper/AppWrapper';
import './Testimonials.css';

function Testimonials() {

    const testimonials = TestimonialsInformation.testimonials;

    return (
        <>
            <header>
                <h1 className="section__title">Testimonials</h1>
            </header>
            <section className="testimonials_container" aria-label="Testimonials">
                {
                    testimonials.map((testimonial, index) => (
                        <article className="testimonial_container shadow" key={index}>
                            <h3 className="testimonial_name">{testimonial.name}</h3>
                            <section className="testimonial_content" aria-label="Testimonial Content">
                                <img align="left" src={testimonial.image} alt="" className="testimonial_img"></img>
                                <p className="testimonial_description">{testimonial.comment}</p>
                                <span className="testimonial_company">{testimonial.company}</span>
                            </section>
                        </article>
                    ))}

            </section>
        </>
    );
}

export default AppWrapper(Testimonials, 'testimonials', 'testimonials');