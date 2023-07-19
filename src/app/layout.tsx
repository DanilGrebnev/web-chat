import './globals.css'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ILayout } from '../types/layout'

const roboto = Roboto({
    weight: ['300', '400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'First page',
    description: 'First page',
}

const RootLayout = ({ children }: ILayout) => {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    )
}

export default RootLayout
