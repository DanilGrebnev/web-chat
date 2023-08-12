'use client'

import s from './s.module.scss'
import Image from 'next/image'
import SendIcon from '@assets/send.svg'

import { useRef } from 'react'
import { Layout } from '@/layouts/Layout'
import { testData } from '@/testData'
import { MessageAsynkThunkService } from '@/redux/features/messageSlice/thunk'
import { useAppDispatch, useAppSelector } from '@/hooks'

const senderId = testData.userId
const dialogId = '64ccfbf2ee490e1510f91cb5'

export const InputMessage = () => {
    const dispatch = useAppDispatch()

    const currentDialogId = useAppSelector(
        ({ dialogReducer }) => dialogReducer.currentDialogId
    )

    const inputRef = useRef<HTMLInputElement>(null)

    const sendData = () => {
        const data = {
            text: inputRef?.current?.value as string,
            senderId,
            dialogId: currentDialogId,
        }

        dispatch(MessageAsynkThunkService.sendMessage(data))
    }

    return (
        <footer className={s.footer}>
            <Layout
                tag='div'
                color='lightSilver'
                className={s.input}
            >
                <input
                    ref={inputRef}
                    placeholder='Type your message here...'
                />
            </Layout>
            <Layout
                tag='button'
                color='purple'
                className={s.send_btn}
            >
                <Image
                    width={35}
                    height={35}
                    src={SendIcon}
                    onClick={sendData}
                    alt='send button'
                />
            </Layout>
        </footer>
    )
}
