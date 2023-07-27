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

    p {
        font-family: 'Roboto'
    }
`;

export default GlobalStyle;
