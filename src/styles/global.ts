import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }

    body {
      font-family: 'Inter', sans-serif;
    }

    h1, h2, h3 {
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 700;
    }
  }
`

export default GlobalStyles
