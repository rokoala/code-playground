import styled from 'styled-components';

export const Button = styled.button`
    background-color: #444857;
    color: white;
    font-weight: 300;
    border-radius: 5px;
    border: rgba(0, 0, 0, 0.09);
    font-size: 1rem;
    padding: 10px 15px;
    line-height: 20px;

    &:active {
        transform: translateY(1px);
        border: none;
    }
    &:focus {
        outline: none;
    }
`;
