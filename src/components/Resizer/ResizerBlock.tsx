import React from 'react';
import ResizerBar from './ResizerBar';
import ResizerContent from './ResizerContent';

export interface XY {
    x: number;
    y: number;
}

interface Props {
    hide?: boolean;
    barSize: string;
    initialWidth: number;
    initialHeight: number;
    disableResizeBar?: boolean;
    leftDiff?: number;
    rightDiff?: number;
    topDiff?: number;
    bottomDiff?: number;
    xmax?: number;
    xmin?: number;
    ymax?: number;
    ymin?: number;
    width: number;
    height: number;
    isVertical?: boolean;
    onResize?: (diff: XY) => void;
    onStop?: (x: XY) => void;
}

const ResizerBlock: React.FC<Props> = ({
    children,
    hide = false,
    barSize,
    initialWidth,
    initialHeight,
    disableResizeBar = false,
    leftDiff = 0,
    rightDiff = 0,
    topDiff = 0,
    bottomDiff = 0,
    xmax,
    xmin,
    ymax,
    ymin,
    width,
    height,
    isVertical,
    onResize,
    onStop,
}) => (
    <>
        {!disableResizeBar && (
            <ResizerBar
                hide={hide}
                size={barSize}
                isVertical={isVertical}
                limit={{ xmax, xmin, ymax, ymin }}
                onResize={(args) => {
                    if (onResize) onResize(args);
                }}
                onStop={(args) => {
                    if (onStop) onStop(args);
                }}
            />
        )}
        <ResizerContent
            hide={hide}
            currentX={initialWidth}
            currentY={initialHeight}
            width={width}
            height={height}
            diffX={-leftDiff + rightDiff}
            diffY={-topDiff + bottomDiff}
        >
            {children}
        </ResizerContent>
    </>
);

export default ResizerBlock;
