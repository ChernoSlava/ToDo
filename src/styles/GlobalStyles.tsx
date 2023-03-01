import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
  }

  body {
      padding: 0;
      margin: 0;
      background: rgb(238,174,202);
      background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  }
  body::-webkit-scrollbar {
    width: 13px;
  }
  body::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: #292929;
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgb(42, 1, 56);
    box-shadow: inset 0 0 6px rgba(2, 254, 57, 0.526);

  }
  button:hover{
    opacity: 0.8;
  }

  a:hover{
    opacity: 0.7;
  }
`;
