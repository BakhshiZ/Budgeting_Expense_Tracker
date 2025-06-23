import { useState, useEffect } from "react";

function useFindWH() {
    const [winWidth, setWinWidth] = useState(window.innerWidth);
    const [winHeight, setWinHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWinHeight(window.innerHeight);
            setWinWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { winWidth, winHeight };
}

export default useFindWH;