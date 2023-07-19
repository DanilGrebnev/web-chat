import { ILayout } from '@/types/layout'
import { CSSProperties } from 'react'

export interface IApp extends ILayout {
    className?: string
    style?: CSSProperties
}
