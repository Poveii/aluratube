import { createGlobalStyle } from "styled-components"

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
  /* Scroll */
  *::-webkit-scrollbar {
    width: 14px;
  }
  *::-webkit-scrollbar-track {
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb {
    height: 48px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: #777777;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #616161;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;

    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase}
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`
