import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    #root {
        height: 100vh;
        display: flex;
        align-items: center;
        background-color: black;
    }

    button, input {
        outline: none;
        border: none;
    }

    button {
        cursor: pointer;
    }

    p {
        font-family: 'Roboto';
        user-select: none;
    }

    img {
        user-select: none;
    }
`;

export default GlobalStyle;
