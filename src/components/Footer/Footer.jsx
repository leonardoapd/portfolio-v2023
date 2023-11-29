import { BsLinkedin, BsGithub, BsFillEnvelopeAtFill } from 'react-icons/bs';
import LinksInformation from '../../assets/data/data.json';
import './Footer.css';

export default function Footer() {
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

	return (
		<>
			<footer className='footer'>
				<div className='footer__block col-md-4'>
					<span className='footer__text'>
						&copy; 2023 Leonardo Perdomo
					</span>
				</div>

				<ul className='footer__nav col-md-4 footer__block'>
					{links.map((link, index) => (
						<li className='footer__item' key={index}>
							<a
								className='footer__link'
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
							>
								<link.icon />
							</a>
						</li>
					))}
				</ul>
			</footer>
		</>
	);
}
