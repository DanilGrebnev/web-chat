'use client'
import { useEffect, useRef, useState } from 'react'

import { MessageItem } from './MessageItem'
import s from './s.module.scss'
import { fetchApi } from '@/lib/fetchApi'

const myId = '64cb60f6acf31198f67c7014'

interface IMessage {
    text: string
    authorId: string
    dialogId: string
}

export const MessagesField = () => {
    const [message, setMessage] = useState<IMessage[]>([])

    useEffect(() => {
        fetchApi
            .get<IMessage[]>(
                'http://localhost:8090/messages/64ccfbf2ee490e1510f91cb5'
            )
            .then(data => setMessage(data))
    }, [])

    return (
        <ul
            id='Message_field'
            className={s.messages_field}
        >
            {message.map(({ text, authorId, dialogId }, i: number) => {
                return (
                    <MessageItem
                        key={i}
                        text={text}
                        author={authorId === myId}
                    />
                )
            })}
        </ul>
    )
}
