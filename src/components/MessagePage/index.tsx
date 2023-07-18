import { FrendsList } from '@components/FrendsList'
import { GroupList } from '@components/GroupList'
import { SearchBar } from '@components/SearchBar'
import { Messages } from '@components/Messages'

import s from './s.module.scss'

export const MessagePage = () => {
    return (
        <section className={s.message_page}>
            <section className={s.contact_list}>
                <SearchBar />
                <GroupList />
                <FrendsList />
            </section>
            <Messages />
        </section>
    )
}
