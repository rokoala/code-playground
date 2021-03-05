import styled from 'styled-components';

interface CodeBlockProps {
    height: number;
}

export const CodeBlock = styled.div<CodeBlockProps>`
    display: flex;
    position: relative;
    height: ${(props) => `${props.height}px`};
    flex-direction: row;
    width: 100%;
`;
