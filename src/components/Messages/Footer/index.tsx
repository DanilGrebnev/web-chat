import { Layout } from '@/layouts/Layout'
import s from './s.module.scss'
import SendIcon from '@assets/send.svg'
import Image from 'next/image'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <Layout
                tag='div'
                color='lightSilver'
                className={s.input}
            >
                <input placeholder='Type your message here...' />
            </Layout>
            <Layout
                tag='div'
                color='purple'
                className={s.send_btn}
            >
                <Image
                    width={35}
                    height={35}
                    src={SendIcon}
                    alt='send button'
                />
            </Layout>
        </footer>
    )
}
