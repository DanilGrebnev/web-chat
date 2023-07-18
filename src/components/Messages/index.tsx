import { Layout } from '../../layouts/Layout'
import { ContactInfo } from './ContactInfo'
import { Footer } from './Footer'
import { MessagesField } from './MessagesField'
import { IMessage } from './type'
import { FC } from 'react'

import cn from 'classnames'
import s from './s.module.scss'

//Компонент отображения сообщений
export const Messages: FC<IMessage> = ({ className }) => {
    return (
        <Layout
            boxShadow
            id='Messages'
            tag='section'
            style={{ height: '100%' }}
            className={cn(s.messages_wrapper, className)}>
            <ContactInfo />
            <MessagesField />
            <Footer />
        </Layout>
    )
}
