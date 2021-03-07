import React from 'react';
import ResizerBar from './ResizerBar';
import ResizerContent from './ResizerContent';

export interface XY {
    x: number;
    y?: number;
}

interface Props {
    hide?: boolean;
    initialWidth: number;
    disableResizeBar?: boolean;
    leftDiff?: number;
    rightDiff?: number;
    xmax?: number;
    xmin?: number;
    onResize?: (diff: XY) => void;
    onStop?: (x: XY) => void;
}

const ResizerBlock: React.FC<Props> = ({
    children,
    hide = false,
    initialWidth,
    disableResizeBar = false,
    leftDiff = 0,
    rightDiff = 0,
    xmax,
    xmin,
    onResize,
    onStop,
}) => (
    <>
        <ResizerBar
            hide={hide}
            limit={{ xmax, xmin }}
            onResize={({ x }) => {
                if (!disableResizeBar && onResize) onResize({ x });
            }}
            onStop={({ x }) => {
                if (!disableResizeBar && onStop) onStop({ x });
            }}
        />
        <ResizerContent hide={hide} currentX={initialWidth} diffX={-leftDiff + rightDiff}>
            {children}
        </ResizerContent>
    </>
);

export default ResizerBlock;
