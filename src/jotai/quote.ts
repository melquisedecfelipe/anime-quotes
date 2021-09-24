import { atomWithQuery } from 'jotai/query'

import { counterAtom } from './counter'

import { getQuote } from '../services/api'

export const quoteAtom = atomWithQuery(get => ({
  queryKey: ['quote', get(counterAtom)],
  queryFn: async () => {
    const quote = await getQuote()

    return quote
  }
}))
