export interface ILayout {
    children?: React.ReactNode
    style?: React.CSSProperties
    color?: 'purple' | 'silver' | 'white' | 'lightSilver'
    className?: string
    boxShadow?: boolean
    tag?: keyof HTMLElementTagNameMap
    id?: string
    onClick?: (e: React.SyntheticEvent) => void
}
