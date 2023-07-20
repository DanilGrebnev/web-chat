import './globals.css'
import { Metadata } from 'next'
import { ILayout } from '../types/layout'
// import { Roboto } from 'next/font/google'
import { roboto } from './font'
import { FC } from 'react'

export const metadata: Metadata = {
    title: 'First page',
    description: 'First page',
}

const RootLayout: FC<ILayout> = ({ children }) => {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    )
}

export default RootLayout
