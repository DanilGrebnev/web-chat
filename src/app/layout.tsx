import './globals.css'
import { FC } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ILayout } from '@/types/layout'

import cn from 'classnames'

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

const RootLayout: FC<ILayout> = ({ children }) => {
    return (
        <html lang="en">
            <body className={cn(roboto.className)}>{children}</body>
        </html>
    )
}

export default RootLayout
