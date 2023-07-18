import { MessageItem } from './MessageItem'
import s from './s.module.scss'

export const MessagesField = () => {
    return (
        <div className={s.messages_field}>
            {[...new Array(10)].map((_, i) => {
                return <MessageItem key={i} />
            })}
        </div>
    )
}
