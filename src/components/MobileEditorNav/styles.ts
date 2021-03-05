import styled from 'styled-components';

export const CodeNav = styled.div`
    display: flex;
    position: absolute;
    z-index: 2;
    width: 100%;
    justify-content: center;
    flex-direction: row;
`;

interface ButtonNavProps {
    isActive: boolean;
}

export const ButtonNav = styled.button<ButtonNavProps>`
    background-color: #444857;
    color: white;
    border: rgba(0, 0, 0, 0.09);
    font-size: 0.8rem;
    padding: 4px 16px;
    line-height: 20px;
    margin-right: 1px;
    border-top: ${(props) => (props.isActive ? '1px solid white' : '1px solid gray')};
    &:active {
        transform: translateY(1px);
        border: none;
    }
    &:focus {
        outline: none;
    }
`;
