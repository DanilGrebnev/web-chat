import { Layout } from '../../layouts/Layout'
import { ContactInfo } from './ContactInfo'
import { InputMessage } from './InputMessage'
import { MessagesField } from './MessagesField'
import { IMessage } from './type'
import { FC, useEffect } from 'react'
import { logIn } from '@/redux/features/authSlice'
import { useDispatch } from 'react-redux'

import cn from 'classnames'
import s from './s.module.scss'

//Компонент отображения сообщений
export const Messages: FC<IMessage> = ({ className }) => {
    // useEffect

    return (
        <Layout
            boxShadow
            id='Messages-Content'
            tag='section'
            className={cn(s.message_container, className)}
        >
            <ContactInfo />
            <MessagesField />
            <InputMessage />
        </Layout>
    )
}
