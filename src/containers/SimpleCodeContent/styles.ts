import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
`;

export const Preview = styled.iframe`
    user-select: none;
    pointer-events: none;
    width: 100%;
    height: 100%;
`;
