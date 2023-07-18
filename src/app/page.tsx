import axios from 'axios'
import { Roboto } from 'next/font/google'
import React from 'react'
import s from './s.module.scss'
import { GroupList, NavBar, SearchBar } from '@/components'
import { FrendsList } from '@/components'
import { Messages } from '@/components'
import cn from 'classnames'

const roboto = Roboto({
    weight: ['300', '400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const MyApp = () => {
    return (
        <main
            className={cn(s.App, roboto.className)}
            id='App'>
            <div
                id='Navbar'
                className={s.navbar}>
                <NavBar />
            </div>
            <div className={s.contact_list}>
                <SearchBar />
                <GroupList />
                <FrendsList />
            </div>
            <Messages className={s.messages} />
        </main>
    )
}

export default MyApp
