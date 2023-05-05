/* eslint-disable react-refresh/only-export-components */
import TestimonialsInformation from '../../assets/data/data.json';
import AppWrapper from '../../wrapper/AppWrapper';
import './Testimonials.css';

function Testimonials() {

    const testimonials = TestimonialsInformation.testimonials;

    return (
        <>
            <h2 className="section__title">Testimonials</h2>
            <div className="testimonials_container">
                {
                    testimonials.map((testimonial, index) => (
                        <div className="testimonial_container" key={index}>
                            <h3 className="testimonial_name">{testimonial.name}</h3>
                            <div className="testimonial_content">
                                <img align="left" src={testimonial.image} alt="" className="testimonial_img"></img>
                                {/* <div className="testimonial_data"> */}
                                    <p className="testimonial_description">{testimonial.comment}</p>
                                    <span className="testimonial_company">{testimonial.company}</span>
                                {/* </div> */}
                            </div>
                        </div>
                    ))}

            </div>
        </>
    );
}

export default AppWrapper(Testimonials, 'testimonials', 'testimonials');