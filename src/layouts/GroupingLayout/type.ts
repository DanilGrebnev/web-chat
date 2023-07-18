import { ReactElement } from 'react'

export interface IGroupingLayout {
    title: string
    children?: ReactElement | ReactElement[]
    className?: string
    style?: React.CSSProperties
}
