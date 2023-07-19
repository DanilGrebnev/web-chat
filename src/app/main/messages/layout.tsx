import { FC } from 'react'
import { ILayout } from '@/types/layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Сообщения',
    description: 'Страница сообщений',
}

const MessageLayout: FC<ILayout> = ({ children }) => children

export default MessageLayout
