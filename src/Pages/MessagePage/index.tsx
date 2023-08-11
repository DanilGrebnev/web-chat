import { DialogList } from '@components/FrendsList'
import { GroupList } from '@components/GroupList'
import { SearchBar } from '@components/SearchBar'
import { Messages } from '@components/Messages'

import s from './s.module.scss'

/**
 * --Страница сообщений--
 */
export const MessagePage = () => {
    return (
        <section
            id='Messages-page'
            className={s.message_page}
        >
            <section className={s.contact_list}>
                <SearchBar />
                <GroupList />
                <DialogList />
            </section>
            <Messages />
        </section>
    )
}
