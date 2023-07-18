import { FC } from 'react'
import { NavBarList } from './NavBarList'
import { Avatar } from '@components/Avatar'
import { Layout } from '@/layouts/Layout'

import s from './s.module.scss'

export const NavBar: FC = () => {
    return (
        <nav className={s.navbar}>
            <Layout
                tag='ul'
                color='purple'
                className={s.layout}
            >
                <Avatar className={s.avatar} />
                <NavBarList />
            </Layout>
        </nav>
    )
}
