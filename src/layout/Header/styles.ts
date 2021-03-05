import styled from 'styled-components';

export const MainHeader = styled.header`
    display: flex;
    height: 65px;
    padding: 5px 15px;
    background-color: #1e1f26;
    align-items: center;
`;

export const HeaderTools = styled.div`
    padding: 5px;
    margin-left: auto;
`;

interface LogoProps {
    imgUrl: string;
}

export const Logo = styled.div<LogoProps>`
    background-image: ${(props) => `url(${props.imgUrl})`};
    width: 35px;
    height: 35px;
    background-size: cover;
`;
