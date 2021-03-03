import React, { useState, useEffect } from 'react';

interface Props {
    currentX: number;
    diffX: number;
}

const ResizerContent: React.FC<Props> = ({ children, currentX, diffX }) => {
    const [previousX, setPreviousX] = useState(currentX);
    const [widthDiff, setWidthDiff] = useState(0);

    useEffect(() => {
        setWidthDiff(0);
        setPreviousX(currentX);
    }, [currentX]);

    useEffect(() => {
        setWidthDiff(diffX);
    }, [diffX]);

    return <div style={{ width: previousX + widthDiff }}>{children}</div>;
};

export default ResizerContent;
