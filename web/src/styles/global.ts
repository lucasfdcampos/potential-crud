import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0px;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    display: block;
  }

  html, body, #app, #root {
    min-height: 100%;
    height: 100%;
  }

  body {
    background: #121214;
    color: #fff;
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased;
    -webkit-scrollbar-width: thin;
    scrollbar-width: thin;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-corner {
    border: none;
    background: none;
  }

  body::-webkit-scrollbar-track {
    background: #121214;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #29292e;
    border-radius: 6px;
    border: 3px solid #121214;
    cursor: move;
  }
`;
