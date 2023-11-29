import { useState, useEffect } from 'react';
import './Navbar.css';
import { BsLinkedin, BsGithub, BsFillEnvelopeAtFill } from 'react-icons/bs';
import LinksInformation from '../../assets/data/data.json';
import Switch from '../Switch/Switch';

export default function Navbar({ toggleTheme, theme }) {
	const [activeLink, setActiveLink] = useState('About');
	const localLinks = ['About', 'Projects', 'Skills', 'Testimonials'];

	// Links for linkedin, github, and email
	const linksInfo = LinksInformation.social_links;

	// Adding the icons to the links
	const icons = [BsLinkedin, BsGithub, BsFillEnvelopeAtFill];

	// Adding the icons to the links
	const links = linksInfo.map((link, index) => {
		return {
			...link,
			icon: icons[index],
		};
	});

	/**
	 * Handles the click event on the navigation menu.
	 */
	const handleNavClick = () => {
		const currentLink = window.location.hash.slice(1);
		console.log('currentLink', currentLink);
		setActiveLink(currentLink);
	};

	const handleScroll = () => {
		const sections = document.querySelectorAll(
			'section#about, section#projects, section#skills, section#testimonials'
		);
		const scrollPosition = window.scrollY + window.innerHeight / 3;

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;

			if (
				scrollPosition >= sectionTop - sectionHeight * 0.25 &&
				scrollPosition <
					sectionTop + sectionHeight - sectionHeight * 0.25
			) {
				const currentId = section.attributes.id.value;
				console.log('currentId', currentId);
				setActiveLink(currentId);
			}
		});
	};

	useEffect(() => {
		handleNavClick();
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('hashchange', handleNavClick);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('hashchange', handleNavClick);
		};
	});

	return (
		<nav className='navbar'>
			<div className='navbar_logo navbar_curve-box'>
				<a href='#about'>
					<span className='material-icons-outlined md-36'>
						terminal
					</span>
				</a>
			</div>
			<ul className='navbar_links navbar_curve-box'>
				{localLinks.map((link, index) => (
					<li
						key={index}
						className={
							link.toLowerCase() === activeLink
								? 'link_selected'
								: ''
						}
					>
						{/* <div></div> */}
						<a href={`#${link.toLowerCase()}`}>{link}</a>
					</li>
				))}
			</ul>
			<div className='navbar_social navbar_curve-box'>
				{links.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						<link.icon />
					</a>
				))}
				<Switch theme={theme} handleToggle={toggleTheme} />
			</div>
		</nav>
	);
}
