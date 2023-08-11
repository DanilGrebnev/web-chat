'use client'

import s from './s.module.scss'
import Image from 'next/image'
import SendIcon from '@assets/send.svg'

import { useRef } from 'react'
import { Layout } from '@/layouts/Layout'
import { testData } from '@/testData'
import { $axios } from '@/lib/fetchApi'
import { fetchMessages } from '@/redux/features/messagesSlice'

const senderId = testData.userId
const dialogId = '64ccfbf2ee490e1510f91cb5'

export const InputMessage = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const sendData = () => {
        $axios
            .post('http://127.0.0.1:8090/messages', {
                data: {
                    text: inputRef?.current?.value as string,
                    senderId,
                    dialogId,
                },
            })
            .then(data => {
                console.log(data)
                window.location.reload()
            })
            .catch(err => {
                console.error(err)
            })
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