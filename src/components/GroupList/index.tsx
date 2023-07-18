import { ContactsItem } from '../ContactsItem'
import { GroupingLayout } from '@layouts/GroupingLayout'
import { FC } from 'react'

import s from './s.module.scss'

// Компонент списка групп
export const GroupList: FC = () => {
    return (
        <GroupingLayout
            className={s.group_list}
            title='Groups'
        >
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
        </GroupingLayout>
    )
}
