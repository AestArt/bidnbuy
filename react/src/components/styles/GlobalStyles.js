import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --title: 2rem;
  --large: 1.15rem;
  --medium: 1rem,
  --normal: 0.9rem;
  --small: 0.808rem;
  --tiny: 0.625rem;
  --light: #ffffff;
  --dark: #0C0E14;
  --primary: #303D61;
}

@media screen and (min-width: 998px) {
  :root {
    --title: 3rem;
    --large: 1.8rem;
    --medium: 1.25rem;
    --normal: 1rem;
    --small: 0.878rem;
    --tiny: 0.74rem;
  }
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .text--light {
    color:  var(--light);
  }
  .text--primary {
    color:  var(--primary);
  }
  .fz-large {
    font-size: var(--large);
  }
  .fz-normal {
    font-size: var(--medium);
  }
  .fz-small {
    font-size: var(--small);
  }
  .fz-tiny {
    font-size: var(--tiny);
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: var(--normal)
  }
  li{
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  i {
    cursor: pointer;
  }
  input[type='text'],
  input[type='password'],
  input[type='email'],
  input[type='tel'],
  button {
    outline: none;
    border: none;
  }
  input:focus,
  input[type='text']:focus,
  input[type='password']:focus,
  input[type='email']:focus,
  input[type='tel']:focus,
  {
    outline: none;
    box-shadow: none;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bbb {
    border: 5px dashed yellow;
  }
`;

export default GlobalStyles;
