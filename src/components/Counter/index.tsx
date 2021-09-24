import { useAtomValue } from 'jotai/utils'
import { useSpring } from '@react-spring/web'

import { counterAtom } from '../../jotai'

import * as S from './styles'

const Counter = () => {
  const counter = useAtomValue(counterAtom)

  const spring = useSpring({ from: { counter: 0 }, counter, reset: true })

  return (
    <S.Wrapper>{spring.counter.to(Math.round)}</S.Wrapper>
  )
}

export default Counter
