import { Layout } from '@/layouts/Layout'
import s from './s.module.scss'

export const MessageItem = () => {
    return (
        <Layout
            className={s.message}
            color='purple'>
            У вас одно новое сообщение
        </Layout>
    )
}
