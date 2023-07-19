import { FC } from 'react'
import { IApp } from './types'

import cn from 'classnames'
import s from './s.module.scss'

export const AppCmp: FC<IApp> = ({ children, className }) => {
    return (
        <section
            id='App'
            className={cn(s.App, className)}
        >
            {children}
        </section>
    )
}
