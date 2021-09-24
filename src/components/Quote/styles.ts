import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 16px 0;

  > h4 {
    font-weight: normal;
    font-size: 18px;
    margin-bottom: 8px;
    max-width: 500px;
    position: relative;

    &::before {
      color: #f5f5f5;
      content: '"';
      display: block;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 160px;
      font-weight: 700;
      left: -40px;
      position: absolute;
      top: -56px;
      z-index: -1;
    }
  }

  > small {
    opacity: 0.75;
  }
`
