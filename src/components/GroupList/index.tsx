import { ContactsItem } from '../ContactsItem'
import { ContactsLayout } from '@layouts/GroupingLayout'
import { FC } from 'react'

import s from './s.module.scss'

// Компонент списка групп
export const GroupList: FC = () => {
    return (
        <ContactsLayout
            className={s.group_list}
            title='Groups'>
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
        </ContactsLayout>
    )
}
