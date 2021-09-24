import styled from 'styled-components'

export const Wrapper = styled.div`
  > svg {
    animation: rotate 4s infinite;
    height: 40px;
    width: 40px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }
`
