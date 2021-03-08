import styled from 'styled-components';

export interface BarProps {
    size: string;
    isVertical: boolean;
    hide?: boolean;
}

export const Bar = styled.div<BarProps>`
    z-index: 2;
    flex: 0.001 0 ${(props) => props.size};

    display: ${(props) => (props.hide ? 'none' : 'block')};
    cursor: ${(props) => (props.isVertical ? 'row-resize' : 'col-resize')};
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    border-right: 1px solid rgba(0, 0, 0, 0.4);
    background-color: #333642;
`;

interface ResizerWrapperProps {
    direction: 'horizontal' | 'vertical';
    reverse: boolean;
}

export type ResizerWrapperDirection = 'horizontal' | 'vertical';

export const ResizerWrapper = styled.div<ResizerWrapperProps>`
    display: flex;
    overflow: hidden;
    position: relative;
    flex-direction: ${(props) => {
        if (props.direction === 'horizontal') {
            if (props.reverse) {
                return 'row-reverse';
            }
            return 'row';
        }

        if (props.reverse) return 'column-reverse';

        return 'column';
    }};
    width: 100%;
    height: 100%;
`;
