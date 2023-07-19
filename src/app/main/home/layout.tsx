import { FC } from 'react'
import { ILayout } from '@/types/layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page',
}

const HomeLayout: FC<ILayout> = ({ children }) => children

export default HomeLayout
