import { NavBar } from '@/components'
import { FC, ReactNode } from 'react'
import { ILayout } from '@/types/layout'
import s from './s.module.scss'

const MessagesLayout: FC<ILayout> = ({ children }) => {
    return (
        <section
            id="Main"
            className={s.App}
        >
            <NavBar />
            {children}
        </section>
    )
}

export default MessagesLayout
