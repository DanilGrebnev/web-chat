import { FC } from 'react'
import { ContactsItem } from '@/components/ContactsItem'
import { GroupingLayout } from '@/layouts/GroupingLayout'

// Список друзей
export const FrendsList: FC = () => {
    return (
        <GroupingLayout title='People'>
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
        </GroupingLayout>
    )
}
