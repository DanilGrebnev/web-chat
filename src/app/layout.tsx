import './globals.css'
import { ReactNode, FC } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import cn from 'classnames'
import s from './s.module.scss'
import { ILayout } from '@/types/layout'
import { AppCmp } from '@/components/AppComponent'

interface IRootLayout extends ILayout {}

const roboto = Roboto({
    weight: ['300', '400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'First page',
    description: 'Home page',
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    )
}

export default RootLayout
