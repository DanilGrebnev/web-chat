import { FC } from 'react'
import { ILayer } from './type'

export const Layer: FC<ILayer> = ({ children }) => {
    return <section>{children}</section>
}
