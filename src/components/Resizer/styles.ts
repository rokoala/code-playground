import styled from 'styled-components';

interface BarProps {
    isVertical: boolean;
}

export const Bar = styled.div<BarProps>`
    z-index: 2;
    cursor: ${(props) => (props.isVertical ? 'row-resize' : 'col-resize')};
    min-width: 18px;
    min-height: 18px;
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    border-right: 1px solid rgba(0, 0, 0, 0.4);
    background-color: #333642;
`;
