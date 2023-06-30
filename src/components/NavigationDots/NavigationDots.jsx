import './NavigationDots.css';

export default function NavigationDots({active}) {
    return (
        <div className="app__navigation">
            {['about', 'projects', 'skills', 'testimonials'].map((item, index) => (
                <a href={`#${item}`}
                    key={index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#4e56d3' } : {}}
                />
            ))}
        </div>
    );
}