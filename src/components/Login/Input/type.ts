import { SyntheticEvent } from 'react'

export interface IInput {
    name: string
    onChange?: (e: SyntheticEvent<HTMLInputElement>) => void
}
