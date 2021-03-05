import React, { useState, useEffect } from 'react';
import { Bar } from './styles';

interface XY {
    x: number;
    y: number;
}

interface Limit {
    xmin?: number;
    ymin?: number;
    xmax?: number;
    ymax?: number;
}

interface Props {
    isVertical?: boolean;
    limit?: Limit;
    hide?: boolean;
    onResize?: (diff: XY) => void;
    onStop?: (n: XY) => void;
}

const ResizerBar: React.FC<Props> = ({
    isVertical = false,
    limit = { xmin: 0, ymin: 0, xmax: 9999, ymax: 9999 },
    hide = false,
    onResize,
    onStop,
}) => {
    const xyLimit = { xmin: 0, ymin: 0, xmax: 9999, ymax: 9999, ...limit };

    const [isResizing, setIsResizing] = useState(false);
    const [startXY, setStartXY] = useState({
        x: 0,
        y: 0,
    });

    const resize = (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        const diff = {
            x: x - startXY.x,
            y: y - startXY.y,
        };

        if (onResize) {
            if (y >= xyLimit.ymin && y <= xyLimit.ymax) onResize(diff);
        }
    };

    const stopResize = (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        const diff = {
            x: x - startXY.x,
            y: y - startXY.y,
        };

        if (onStop) onStop(diff);
        setIsResizing(false);
    };

    const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const x = e.clientX;
        const y = e.clientY;

        setIsResizing(true);
        setStartXY({ x, y });
    };

    const resizeTouch = (e: any) => {
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;

        const diff = {
            x: x - startXY.x,
            y: y - startXY.y,
        };

        if (onResize) {
            if (y >= xyLimit.ymin && y <= xyLimit.ymax) onResize(diff);
        }
    };

    const stopResizeTouch = (e: any) => {
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;

        const diff = {
            x: x - startXY.x,
            y: y - startXY.y,
        };

        if (onStop) onStop(diff);
        setIsResizing(false);
    };

    const touchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;

        setIsResizing(true);
        setStartXY({ x, y });
    };

    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', resize, false);
            window.addEventListener('mouseup', stopResize, false);
            window.addEventListener('touchmove', resizeTouch, false);
            window.addEventListener('touchleave', stopResizeTouch, false);
        } else {
            window.removeEventListener('mousemove', resize, false);
            window.removeEventListener('mouseup', stopResize, false);
            window.removeEventListener('touchmove', resizeTouch, false);
            window.removeEventListener('touchleave', stopResizeTouch, false);
        }

        return () => {
            window.removeEventListener('mousemove', resize, false);
            window.removeEventListener('mouseup', stopResize, false);
            window.removeEventListener('touchmove', resizeTouch, false);
            window.removeEventListener('touchleave', stopResizeTouch, false);
        };
    }, [isResizing]);

    return <Bar isVertical={isVertical} hide={hide} onTouchStart={touchStartHandler} onMouseDown={mouseDownHandler} />;
};

export default ResizerBar;
