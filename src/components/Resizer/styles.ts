import styled from 'styled-components';

interface BarProps {
    isVertical: boolean;
    hide?: boolean;
}

export const Bar = styled.div<BarProps>`
    z-index: 2;
    flex: 0.001 0 18px;
    display: ${(props) => (props.hide ? 'none' : 'block')};
    cursor: ${(props) => (props.isVertical ? 'row-resize' : 'col-resize')};
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    border-right: 1px solid rgba(0, 0, 0, 0.4);
    background-color: #333642;
`;
