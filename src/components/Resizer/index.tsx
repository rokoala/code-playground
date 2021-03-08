/* eslint-disable @typescript-eslint/ban-types */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import useResizeObserver from 'use-resize-observer';
import ListResizerBlock, { Boundaries } from './ListResizerBlock';
import { ResizerWrapper, ResizerWrapperDirection } from './styles';

interface Props {
    direction?: ResizerWrapperDirection;
    reverse?: boolean;
    barSize: number;
}

const useMergedCallbackRef = (...callbacks: Function[]) => {
    const callbacksRegistry = useRef<Function[]>(callbacks);

    useEffect(() => {
        callbacksRegistry.current = callbacks;
    }, [...callbacks]);

    return useCallback((element) => {
        callbacksRegistry.current.forEach((callback) => callback(element));
    }, []);
};

const Resizer: React.FC<Props> = ({ children, direction = 'horizontal', reverse = false, barSize }) => {
    const countElements = React.Children.count(children);

    const [boundaries, setBoundaries] = useState<Boundaries>({ xmin: 0, xmax: 9999, ymin: 0, ymax: 9999 });
    const { ref, width, height } = useResizeObserver<HTMLDivElement>();

    const mergedCallbackRef = useMergedCallbackRef(ref, (element: HTMLDivElement) => {
        if (element) {
            const dim = element.getBoundingClientRect();
            setBoundaries({ xmin: dim.left, xmax: dim.left + dim.width, ymin: dim.top, ymax: dim.top + dim.height });
        }
    });

    return (
        <ResizerWrapper key={direction} ref={mergedCallbackRef} direction={direction} reverse={reverse}>
            {width && height && (
                <ListResizerBlock
                    reverseFactor={reverse ? -1 : 1}
                    barSize={barSize}
                    direction={direction}
                    count={countElements}
                    height={height}
                    width={width}
                    boundaries={boundaries}
                >
                    {children}
                </ListResizerBlock>
            )}
        </ResizerWrapper>
    );
};

export default Resizer;
