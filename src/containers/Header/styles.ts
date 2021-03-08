import styled from 'styled-components';
import { Button } from 'components/Styled';

export const MainHeader = styled.header`
    display: flex;
    height: 65px;
    padding: 5px 15px;
    background-color: #1e1f26;
    align-items: center;
`;

export const HeaderTools = styled.div`
    display: flex;
    padding: 5px;
    margin-left: auto;
`;

export const Logo = styled.div`
    background-image: url('/code-playground/logo192.png');
    width: 30px;
    height: 30px;
    background-size: cover;
`;

export const DownloadButton = styled(Button)`
    margin: 5px;
    & > span {
        margin-left: 5px;
    }
    @media (max-width: 767px) {
        & > span {
            display: none;
        }
    }
`;

export const HideMobile = styled.span`
    @media (max-width: 767px) {
        & > * {
            display: none;
        }
    }
`;
