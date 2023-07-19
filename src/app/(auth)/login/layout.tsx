import type { Metadata } from 'next'
import { ILayout } from '@/types/layout'
import { FC } from 'react'

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login page',
}

const LayoutLogin: FC<ILayout> = ({ children }) => children

export default LayoutLogin
