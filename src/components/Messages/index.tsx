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
            id='Message-Content'
            tag='section'
            className={cn(s.message_container, className)}
        >
            <ContactInfo />
            <MessagesField />
            <Footer />
        </Layout>
    )
}
