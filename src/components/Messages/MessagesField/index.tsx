'use client'
import { useEffect, useRef } from 'react'

import { MessageItem } from './MessageItem'
import s from './s.module.scss'

export const MessagesField = () => {
    return (
        <main
            id='Message_field'
            className={s.messages_field}
        >
            {[...new Array(20)].map((_, i) => {
                return <MessageItem key={i} />
            })}
        </main>
    )
}
