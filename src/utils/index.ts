import { useState, useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';

interface WindowDimensions {
    width: number;
    height: number;
    mobile: boolean;
}

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;

    const mobile = width < 767 || height < 440;

    return {
        width,
        height,
        mobile,
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

export function usePrevious<T>(value: T): MutableRefObject<T | undefined>['current'] {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}
