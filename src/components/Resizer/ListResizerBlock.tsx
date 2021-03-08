import React, { useState, useEffect } from 'react';
import { usePrevious } from 'utils';
import { ResizerWrapperDirection } from './styles';

import ResizerBlock from './ResizerBlock';

export interface Boundaries {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
}

interface Props {
    reverseFactor: -1 | 1;
    direction: ResizerWrapperDirection;
    barSize: number;
    count: number;
    height: number;
    width: number;
    hide?: boolean[];
    boundaries: Boundaries;
}

const ListResizerBlock: React.FC<Props> = ({
    children,
    reverseFactor,
    barSize,
    direction,
    width,
    height,
    count,
    hide = [],
    boundaries,
}) => {
    const isVertical = direction === 'vertical';
    const [diffControlX, setDiffControlX] = useState(new Array(count).fill(0));
    const [diffControlY, setDiffControlY] = useState(new Array(count).fill(0));
    const [sizeControl, setSizeControl] = useState(
        new Array(count).fill({
            width: (width - barSize * (count - 1)) / count,
            height: (height - barSize * (count - 1)) / count,
        }),
    );

    const previousWidth = usePrevious(width) || width;
    const previousHeight = usePrevious(height) || height;

    useEffect(() => {
        const resizeDiff = (width - previousWidth) / count;
        setSizeControl([...sizeControl.map((w) => ({ ...w, width: w.width + resizeDiff }))]);
    }, [width]);

    useEffect(() => {
        const resizeDiff = (height - previousHeight) / count;
        setSizeControl([...sizeControl.map((w) => ({ ...w, height: w.height + resizeDiff }))]);
    }, [height]);

    return (
        <>
            {React.Children.map(children, (child, index) => (
                <ResizerBlock
                    isVertical={isVertical}
                    barSize={`${barSize}px`}
                    hide={hide[index]}
                    width={width}
                    height={height}
                    topDiff={diffControlY[index]}
                    bottomDiff={diffControlY[index + 1]}
                    leftDiff={diffControlX[index]}
                    rightDiff={diffControlX[index + 1]}
                    onResize={({ x, y }) => {
                        if (isVertical) {
                            const newDiff = [...diffControlY];
                            newDiff[index] = reverseFactor * y;
                            setDiffControlY(newDiff);
                        } else {
                            const newDiff = [...diffControlX];
                            newDiff[index] = reverseFactor * x;
                            setDiffControlX(newDiff);
                        }
                    }}
                    onStop={({ x, y }) => {
                        if (isVertical) {
                            const newDiff = [...diffControlY];
                            newDiff[index] = 0;
                            setDiffControlY(newDiff);

                            const newSizeControl = [...sizeControl];

                            if (newSizeControl[index - 1]) newSizeControl[index - 1].height += reverseFactor * y;
                            newSizeControl[index].height -= reverseFactor * y;

                            setSizeControl(newSizeControl);
                        } else {
                            const newDiff = [...diffControlX];
                            newDiff[index] = 0;
                            setDiffControlX(newDiff);

                            const newSizeControl = [...sizeControl];

                            if (newSizeControl[index - 1]) newSizeControl[index - 1].width += reverseFactor * x;
                            newSizeControl[index].width -= reverseFactor * x;

                            setSizeControl(newSizeControl);
                        }
                    }}
                    disableResizeBar={index === 0}
                    initialHeight={isVertical ? sizeControl[index].height : height}
                    initialWidth={isVertical ? width : sizeControl[index].width}
                    xmax={
                        index === count - 1
                            ? boundaries.xmax
                            : sizeControl
                                  .filter((_, idx) => idx <= index + 1)
                                  .reduce(
                                      (accumulator, currentValue) => accumulator + currentValue.width + barSize,
                                      -barSize,
                                  )
                    }
                    xmin={
                        index <= 1
                            ? boundaries.xmin
                            : sizeControl
                                  .filter((_, idx) => idx < index - 1)
                                  .reduce((accumulator, currentValue) => accumulator + currentValue.width + barSize, 0)
                    }
                    ymax={
                        index === count - 1
                            ? boundaries.ymax - barSize
                            : sizeControl
                                  .filter((_, idx) => idx <= index)
                                  .reduce(
                                      (accumulator, currentValue) => accumulator + currentValue.height,
                                      boundaries.ymin,
                                  )
                    }
                    ymin={
                        index <= 1
                            ? boundaries.ymin
                            : sizeControl
                                  .filter((_, idx) => idx < index - 1)
                                  .reduce((accumulator, currentValue) => accumulator + currentValue.height + barSize, 0)
                    }
                >
                    {child}
                </ResizerBlock>
            ))}
        </>
    );
};

export default ListResizerBlock;
