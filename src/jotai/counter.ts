import { atomWithStorage } from 'jotai/utils'

export const counterAtom = atomWithStorage('@Jotai:Counter', 5000)
