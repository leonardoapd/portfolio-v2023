import Wave from "../components/Wave/Wave";
import WavesInformation from '../assets/data/data.json';
import NavigationDots from "../components/NavigationDots/NavigationDots";

export default function AppWrapper(Component, idName, classNames) {
    return function Wrapper(props) {

        const waves = WavesInformation.waves;

        return (
            <>
                <section className={`container container-${classNames}`} aria-label={idName}>
                    <Wave {...waves[0]} id={0} />
                    <article id={idName} className={`${classNames}`}>
                        <Component {...props} />
                    </article>
                    <Wave {...waves[1]} id={1} />
                    <NavigationDots active={idName} />
                </section>
            </>
        );
    }
}
