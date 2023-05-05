export default function HandleMovement(currentIndexProject, projects, setCurrentIndexProject) {

    let xDown = null;
    let yDown = null;

    const handleTouchStart = (e) => {
        // e.preventDefault();
        const firstTouch = e.touches[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    const handleTouchMove = (e) => {
        // e.preventDefault();
        if (!xDown || !yDown) {
            return;
        }

        let xUp = e.touches[0].clientX;
        let yUp = e.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                nextProject();
            } else {
                previousProject();
            }
        }

        xDown = null;
        yDown = null;
    };

    const handleTouchEnd = (e) => {
        e.preventDefault();
    };

    const nextProject = () => {
        currentIndexProject < projects.length - 1 ? setCurrentIndexProject(currentIndexProject + 1) : setCurrentIndexProject(0);
    };

    const previousProject = () => {
        currentIndexProject > 0 ? setCurrentIndexProject(currentIndexProject - 1) : setCurrentIndexProject(projects.length - 1);
    };

    return { handleTouchStart, handleTouchEnd, handleTouchMove, nextProject, previousProject };
}
