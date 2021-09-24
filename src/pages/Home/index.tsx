import { useUpdateAtom } from "jotai/utils";
import { Suspense } from 'react'

import Button from '../../components/Button'
import Counter from '../../components/Counter'
import Loading from '../../components/Loading'
import Quote from '../../components/Quote'

import { counterAtom } from '../../jotai'

import * as S from './styles'

export default function Home() {
  const setCounterAtom = useUpdateAtom(counterAtom);

  return (
    <S.Wrapper>
      <S.Header>
        <small>Jotai + <br /> React Query</small>
        <h1>¯\_(ツ)_/¯</h1>
        <p>Random anime quotes</p>
      </S.Header>

      <S.Section>
        <Counter />

        <Suspense fallback={<Loading />}>
          <Quote />

          <Button
            onClick={() => setCounterAtom(atom => atom + 1)}
            variant="outlined"
          >
            Random
          </Button>
        </Suspense>

      </S.Section>
    </S.Wrapper>
  )
}
