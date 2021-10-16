import axios from 'axios'

type QuoteAtomResponse = {
  anime: number
  character: string
  quote: string
}

const api = axios.create({
  baseURL: 'https://animechan.vercel.app/api/'
})

export const getQuote = async () => {
  const { data } = await api.get<QuoteAtomResponse>('random')

  return data
}
