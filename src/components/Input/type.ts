import { CSSProperties, SyntheticEvent } from 'react'

export interface IInput {
    name: string
    password?: boolean
    fontSize?: number
    style?: CSSProperties
    className?: string
    onChange?: (e: SyntheticEvent<HTMLInputElement>) => void
}
