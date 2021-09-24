import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  max-width: 700px;
  padding: 16px;
  position: relative;
`

export const Header = styled.header`
  > small {
    opacity: 0.75;
  }

  > h1 {
    font-size: 40px;
    margin-bottom: 16px;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;
  margin-top: 48px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
