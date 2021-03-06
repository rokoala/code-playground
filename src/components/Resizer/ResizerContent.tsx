import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from 'utils';

interface Props {
    currentX: number;
    diffX: number;
    hide?: boolean;
}

const ResizerContent: React.FC<Props> = ({ children, currentX, diffX, hide }) => {
    const win = useWindowDimensions();

    const [previousX, setPreviousX] = useState(currentX);
    const [widthDiff, setWidthDiff] = useState(0);

    useEffect(() => {
        setWidthDiff(0);
        setPreviousX(currentX);
    }, [currentX]);

    useEffect(() => {
        setWidthDiff(diffX);
    }, [diffX]);

    return (
        <div
            style={{
                position: hide ? 'absolute' : 'relative',
                visibility: hide ? 'hidden' : 'visible',
                width: `${((previousX + widthDiff) / win.width) * 100}%`,
            }}
        >
            {children}
        </div>
    );
};

export default ResizerContent;
