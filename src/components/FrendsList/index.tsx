import { FC } from 'react'
import { ContactsItem } from '@/components/ContactsItem'
import { ContactsLayout } from '@/layouts/GroupingLayout'

// Список друзей
export const FrendsList: FC = () => {
    return (
        <ContactsLayout title='People'>
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
            <ContactsItem />
        </ContactsLayout>
    )
}
