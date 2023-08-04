'use client'
import { useRef } from 'react'

import { Layout } from '@/layouts/Layout'
import s from './s.module.scss'
import SendIcon from '@assets/send.svg'
import Image from 'next/image'
import { fetchApi } from '@/lib/fetchApi'

const authorId = '64cb60f6acf31198f67c7014'
const dialogId = '64ccfbf2ee490e1510f91cb5'

export const Footer = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const sendData = () => {
        fetchApi
            .post('http://127.0.0.1:8090/messages', {
                data: {
                    text: inputRef?.current?.value as string,
                    authorId,
                    dialogId,
                },
            })
            .then(data => {
                console.log(data)
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
