import './AppWrapper.css';

export default function AppWrapper(Component, idName, classNames) {
    return function Wrapper(props) {
        return (
            <>
                <section className={classNames} id={idName} aria-label={idName}>
                    <Component {...props} />
                </section>
            </>
        );
    }
}
