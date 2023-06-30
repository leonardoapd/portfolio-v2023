import './Navbar.css';
import { BsLinkedin, BsGithub, BsFillEnvelopeAtFill } from 'react-icons/bs';
import LinksInformation from '../../assets/data/data.json';
import Switch from '../Switch/Switch';

export default function Navbar({ toggleTheme, theme }) {
    
    const localLinks = ['About', 'Projects', 'Skills', 'Testimonials'];

    // Links for linkedin, github, and email
    const linksInfo = LinksInformation.social_links;

    // Adding the icons to the links
    const icons = [
        BsLinkedin,
        BsGithub,
        BsFillEnvelopeAtFill
    ];

    // Adding the icons to the links
    const links = linksInfo.map((link, index) => {
        return {
            ...link,
            icon: icons[index]
        }
    });

    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <span className="material-icons-outlined md-36">
                    terminal
                </span>
            </div>
            <ul className="navbar_links">
                {localLinks.map((link, index) => (
                    <li key={index}>
                        <div></div>
                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </li>
                ))}
            </ul>
            <div className="navbar_social">
                {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon />
                    </a>
                ))}
                <Switch
                    theme={theme}
                    handleToggle={toggleTheme}
                />
            </div>
        </nav>
    );
}