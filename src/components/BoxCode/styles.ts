import styled from 'styled-components';

export const Title = styled.h2`
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
    white-space: nowrap;
    font-weight: bold;
    color: #aaaebc;
    margin: 0;
    font-size: 1.3em;
    display: inline-block;
    padding-left: 2px;
    vertical-align: middle;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

export const Header = styled.div`
    background-color: black;
    padding: 5px;
`;


export const BoxContent = styled.div`
    display: flex;
    min-width:0;
    flex-direction: column;
`
