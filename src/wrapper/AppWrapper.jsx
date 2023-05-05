import Wave from "../components/Wave/Wave";
import WavesInformation from '../assets/data/data.json';
import NavigationDots from "../components/NavigationDots/NavigationDots";

export default function AppWrapper(Component, idName, classNames) {
    return function Wrapper(props) {

        const waves = WavesInformation.waves;

        return (
            <>
                <div className={`container container-${classNames}`}>
                    <Wave {...waves[0]} id={0} />
                    <section id={idName} className={`${classNames}`}>
                        <Component {...props} />
                    </section>
                    <Wave {...waves[1]} id={1} />
                    <NavigationDots active={idName} />
                </div>
            </>
        );
    }
}
