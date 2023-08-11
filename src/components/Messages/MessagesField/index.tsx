'use client'
import { useEffect, useRef, useState } from 'react'

import { MessageItem } from './MessageItem'
import s from './s.module.scss'
import { $axios } from '@/lib/fetchApi'
import { testData } from '@/testData'
import { fetchMessages } from '@/redux/features/messagesSlice'
import { useAppDispatch } from '@/hooks'
import { useAppSelector } from '@/hooks'
import { dialogs } from '@/redux/features/dialogSlice'

const myId = testData.userId

interface IMessage {
    text: string
    senderId: string
    dialogId: string
}

export const MessagesField = () => {
    const dispatch = useAppDispatch()

    const currentDialogId = useAppSelector(
        ({ dialogReducer }) => dialogReducer.currentDialogId
    )

    const messageStore = useAppSelector(({ messageReduer }) => messageReduer)

    useEffect(() => {
        if (!currentDialogId) return
        
        dispatch(fetchMessages(currentDialogId))
    }, [currentDialogId])

    return (
        <ul
            id='Message_field'
            className={s.messages_field}
        >
            {messageStore.messages.map(
                ({ text, senderId, dialogId }, i: number) => {
                    return (
                        <MessageItem
                            key={i}
                            text={text}
                            author={senderId === myId}
                        />
                    )
                }
            )}
        </ul>
    )
}
