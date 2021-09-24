import { useAtom } from 'jotai'

import { quoteAtom } from '../../jotai'

import * as S from './styles'

const Joke = () => {
  const [{ anime, character, quote }] = useAtom(quoteAtom)

  return (
    <S.Wrapper>
      <h4>{quote}</h4>

      <small>{character} - {anime}</small>
    </S.Wrapper>
  )
}

export default Joke
