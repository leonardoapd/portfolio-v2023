/* eslint-disable react-refresh/only-export-components */
import AppWrapper from '../../wrapper/AppWrapper';
import './About.css';

function About() {
	return (
		<>
			<main className='about__container'>
				<h1 id='about-heading' className='about__name section__title'>
					Hi, I&apos;m{' '}
					<span className='about__name--highlight'>Leo</span>
				</h1>
				<p className='about__emoji'>👨🏻‍💻</p>
				<p className='about__description'>
					Skilled and versatile full-stack developer with 2+ years of
					experience in the field. I create seamless and intuitive
					user experiences that bring your digital product to life.
				</p>
			</main>
		</>
	);
}

export default AppWrapper(About, 'about', 'about');
