'use client'
import { useEffect, useRef, useState } from 'react'

import { MessageItem } from './MessageItem'
import s from './s.module.scss'
import { $axios } from '@/lib/fetchApi'
import { AxiosResponse } from 'axios'

const myId = '64cb60f6acf31198f67c7014'

interface IMessage {
    text: string
    senderId: string
    dialogId: string
}

export const MessagesField = () => {
    const [message, setMessage] = useState<IMessage[]>([])

    useEffect(() => {
        $axios
            .get<IMessage[]>('messages/64ccfbf2ee490e1510f91cb5')
            .then(response => setMessage(response.data))
    }, [])

    return (
        <ul
            id='Message_field'
            className={s.messages_field}
        >
            {message.map(({ text, senderId, dialogId }, i: number) => {
                return (
                    <MessageItem
                        key={i}
                        text={text}
                        author={senderId === myId}
                    />
                )
            })}
        </ul>
    )
}
