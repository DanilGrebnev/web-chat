'use client'
import { FC, useEffect, useState } from 'react'
import { ContactsItem } from '@/components/ContactsItem'
import { GroupingLayout } from '@/layouts/GroupingLayout'
import { $axios } from '@/lib/fetchApi'
import { testData } from '@/testData'

interface IDialogs {
    _id: string
    members: any[]
}

// Список диалогов
export const DialogList: FC = () => {
    const [dialogs, setDialog] = useState<IDialogs[]>([])

    const fetchDialogs = async () => {
        const response = await $axios.get('/dialog/' + testData.userId)

        setDialog(response.data)
    }

    useEffect(() => {
        fetchDialogs()
    }, [])

    return (
        <GroupingLayout title='People'>
            {dialogs.map(({ _id, members }) => {
                const receiver = members[0]

                return (
                    <ContactsItem
                        key={_id}
                        onClick={() => console.log(_id)}
                        receiver={receiver}
                    />
                )
            })}
        </GroupingLayout>
    )
}
