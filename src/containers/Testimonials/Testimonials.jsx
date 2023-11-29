/* eslint-disable react-refresh/only-export-components */
import TestimonialsInformation from '../../assets/data/data.json';
import AppWrapper from '../../wrapper/AppWrapper';
import './Testimonials.css';

function Testimonials() {
	const testimonials = TestimonialsInformation.testimonials;

	return (
		<>
			<h2 className='section__title'>Testimonials</h2>

			<section
				className='testimonials_container'
				aria-label='Testimonials'
			>
                <ul className='testimonials_list'>
				{testimonials.map((testimonial, index) => (
					<li className='testimonial_container' key={index}>
						<h3 className='testimonial_name'>{testimonial.name}</h3>
						<article
							className='testimonial_content'
							aria-label='Testimonial Content'
						>
							<img
								align='left'
								src={testimonial.image}
								alt=''
								className='testimonial_img'
							></img>
							<p className='testimonial_description'>
								{testimonial.comment}
							</p>
							<br></br>
							<span className='testimonial_company'>
								{testimonial.company}
							</span>
						</article>
					</li>
				))}
                </ul>
			</section>
		</>
	);
}

export default AppWrapper(Testimonials, 'testimonials', 'testimonials');
