import React, { useState } from 'react';
import { Button } from 'components/Styled';
import { LayoutEditor, LayoutButtonWrapper } from './styles';

interface Props {
    onClick?: (e: React.MouseEvent) => void;
}

const LayoutButton: React.FC<Props> = ({ children, onClick }) => {
    const [showLayouts, setShowLayouts] = useState(false);

    return (
        <LayoutButtonWrapper>
            <Button
                onClick={(e) => {
                    setShowLayouts(!showLayouts);
                    if (onClick) onClick(e);
                }}
            >
                Change View
            </Button>
            {showLayouts && <LayoutEditor>{children}</LayoutEditor>}
        </LayoutButtonWrapper>
    );
};

export default LayoutButton;
