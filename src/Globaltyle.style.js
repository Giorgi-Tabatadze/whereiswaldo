import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
  button{
    cursor: pointer;
  }
  .loadingSpinner {
  background-color: white;
}

`;

export default GlobalStyle;
