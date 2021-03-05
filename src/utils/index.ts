import { useState, useEffect } from 'react';

interface WindowDimensions {
    width: number;
    height: number;
}

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
};

// useWindowDimensions - React hook to get window dimensions
export const useWindowDimensions = (): WindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};
