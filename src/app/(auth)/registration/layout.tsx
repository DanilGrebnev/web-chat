import type { Metadata } from 'next'
import { ILayout } from '@/types/layout'
import { FC } from 'react'

export const metadata: Metadata = {
    title: 'Registration',
    description: 'Registration page',
}

const LayoutRegistration: FC<ILayout> = ({ children }) => children

export default LayoutRegistration
