import { SyntheticEvent } from 'react'

export interface IInput {
    name: string
    password?: boolean
    onChange?: (e: SyntheticEvent<HTMLInputElement>) => void
}
