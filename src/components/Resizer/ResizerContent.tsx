import React, { useState, useEffect } from 'react';

interface Props {
    width: number;
    height: number;
    currentX: number;
    currentY: number;
    diffX: number;
    diffY: number;
    hide?: boolean;
}

const ResizerContent: React.FC<Props> = ({ children, width, height, currentX, currentY, diffX, diffY, hide }) => {
    const [previousX, setPreviousX] = useState(currentX);
    const [previousY, setPreviousY] = useState(currentY);
    const [widthDiff, setWidthDiff] = useState(0);
    const [heightDiff, setHeightDiff] = useState(0);

    useEffect(() => {
        setWidthDiff(0);
        setPreviousX(currentX);
    }, [currentX]);

    useEffect(() => {
        setWidthDiff(0);
        setPreviousY(currentY);
    }, [currentY]);

    useEffect(() => {
        setWidthDiff(diffX);
    }, [diffX]);

    useEffect(() => {
        setHeightDiff(diffY);
    }, [diffY]);

    return (
        <div
            style={{
                position: hide ? 'absolute' : 'relative',
                visibility: hide ? 'hidden' : 'visible',
                width: `${((previousX + widthDiff) / width) * 100}%`,
                height: `${((previousY + heightDiff) / height) * 100}%`,
            }}
        >
            {children}
        </div>
    );
};

export default ResizerContent;
