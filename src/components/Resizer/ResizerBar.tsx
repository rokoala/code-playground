import React, { useState, useEffect } from 'react';
import { Bar } from './styles';

interface Props {
    onResize?: (diff: number) => void;
    onStop?: (n: number) => void;
}

const Resizer: React.FC<Props> = ({ onResize, onStop }) => {
    const [isResizing, setIsResizing] = useState(false);
    const [startX, setStartX] = useState(0);

    const resize = (e: MouseEvent) => {
        const x = e.clientX;
        const diff = x - startX;
        if (onResize) onResize(diff);
    };

    const stopResize = (e: MouseEvent) => {
        const x = e.clientX;
        const diff = x - startX;
        if (onStop) onStop(diff);
        setIsResizing(false);
    };

    const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const x = e.clientX;
        setIsResizing(true);
        setStartX(x);
    };

    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', resize, false);
            window.addEventListener('mouseup', stopResize, false);
        } else {
            window.removeEventListener('mousemove', resize, false);
            window.removeEventListener('mouseup', stopResize, false);
        }

        return () => {
            window.removeEventListener('mousemove', resize, false);
            window.removeEventListener('mouseup', stopResize, false);
        };
    }, [isResizing]);

    return <Bar onMouseDown={mouseDownHandler} />;
};

export default Resizer;
