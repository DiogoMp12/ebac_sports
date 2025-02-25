import { createGlobalStyle } from 'styled-components';

export const cores = {
  corPrincipal: '#0C2461',
  corSecundaria: '#4A69BD',
  corFundo: '#f5f5f5',
  corTexto: '#333',
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.corFundo};
    padding-top: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }
`;
