'use client'
import { useEffect, useRef, useState } from 'react'

import { MessageItem } from './MessageItem'
import s from './s.module.scss'
import { testData } from '@/testData'
import { useAppDispatch } from '@/hooks'
import { useAppSelector } from '@/hooks'
import { MessageAsynkThunkService } from '@/redux/features/messageSlice/thunk'

const myId = testData.userId

export const MessagesField = () => {
    const dispatch = useAppDispatch()

    const currentDialogId = useAppSelector(
        ({ dialogReducer }) => dialogReducer.currentDialogId
    )

    const messageStore = useAppSelector(({ messageReduer }) => messageReduer)

    useEffect(() => {
        if (!currentDialogId) return

        dispatch(MessageAsynkThunkService.fetchMessages(currentDialogId))
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
