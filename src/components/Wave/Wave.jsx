import './Wave.css';

// eslint-disable-next-line react/prop-types
export default function Wave({id, ...props }) {

    // eslint-disable-next-line react/prop-types
    const [color, opacity, draw] = [props.fill, props.fillOpacity, props.d];

    return (
        <svg
            className={`wave-${id}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
        >
            <path
                fill={color}
                fillOpacity={opacity}
                d={draw}>
            </path>
        </svg>
    );
}