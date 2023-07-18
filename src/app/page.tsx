import { Roboto } from 'next/font/google'
import React from 'react'
import s from './s.module.scss'
import { NavBar } from '@/components'
import { MessagePage } from '@/components/MessagePage'
import cn from 'classnames'

const roboto = Roboto({
    weight: ['300', '400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const MyApp = () => {
    return (
        <section
            id='App'
            className={cn(s.App, roboto.className)}
        >
            <NavBar />
            <MessagePage />
        </section>
    )
}

export default MyApp
