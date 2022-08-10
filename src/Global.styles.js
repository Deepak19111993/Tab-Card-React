// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #3f4c56;
    color: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .active { 
    color: #fff;
    font-weight: 700;
  }
`;

export default GlobalStyle;
