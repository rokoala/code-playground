import React, { useState, useEffect } from 'react';
import { usePrevious, useWindowDimensions } from 'utils';
import ResizerBlock from './ResizerBlock';

interface Props {
    hide: boolean[];
    mobileMode?: boolean;
}

const Resizer: React.FC<Props> = ({ children, hide, mobileMode }) => {
    const win = useWindowDimensions();
    const initWidth = (win.width - 18 * 3) / 3;
    const previousWidth = usePrevious(win.width) || win.width;

    const countElements = React.Children.count(children);

    const [diffControl, setDiffControl] = useState(new Array(countElements).fill(0));
    const [widthControl, setWidthControl] = useState(new Array(countElements).fill(initWidth));

    useEffect(() => {
        const resizeDiff = (win.width - previousWidth) / countElements;
        setWidthControl([...widthControl.map((width) => width + resizeDiff)]);
    }, [win.width]);

    return (
        <>
            {React.Children.map(children, (child, index) => (
                <ResizerBlock
                    hide={hide[index]}
                    leftDiff={diffControl[index]}
                    rightDiff={diffControl[index + 1]}
                    onResize={({ x }) => {
                        const newDiff = [...diffControl];
                        newDiff[index] = x;
                        setDiffControl(newDiff);
                    }}
                    onStop={({ x }) => {
                        const newDiff = [...diffControl];
                        newDiff[index] = 0;
                        setDiffControl(newDiff);

                        const newWidthControl = [...widthControl];

                        if (newWidthControl[index - 1]) newWidthControl[index - 1] += x;
                        newWidthControl[index] -= x;

                        setWidthControl(newWidthControl);
                    }}
                    disableResizeBar={index === 0}
                    initialWidth={mobileMode ? win.width : widthControl[index]}
                    xmax={
                        index === countElements - 1
                            ? win.width
                            : widthControl
                                  .filter((_, idx) => idx <= index + 1)
                                  .reduce((accumulator, currentValue) => accumulator + currentValue + 18)
                    }
                    xmin={
                        index <= 1
                            ? 18
                            : widthControl
                                  .filter((_, idx) => idx < index - 1)
                                  .reduce((accumulator, currentValue) => accumulator + currentValue + 18)
                    }
                >
                    {child}
                </ResizerBlock>
            ))}
        </>
    );
};

export default Resizer;
