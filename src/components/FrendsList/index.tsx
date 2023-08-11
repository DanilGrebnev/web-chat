'use client'
import { FC, useEffect, useState } from 'react'
import { ContactsItem } from '@/components/ContactsItem'
import { GroupingLayout } from '@/layouts/GroupingLayout'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setDialogId, fetchDialog } from '@/redux/features/dialogSlice'

// Список диалогов
export const DialogList: FC = () => {
    const dialogStore = useAppSelector(({ dialogReducer }) => dialogReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchDialog())
    }, [])

    return (
        <GroupingLayout title='People'>
            {dialogStore.dialogs.map(({ _id, members, lastMessage }) => {
                const receiver = members[0]

                return (
                    <ContactsItem
                        key={_id}
                        lastMessage={lastMessage}
                        onClick={() => dispatch(setDialogId(_id))}
                        receiver={receiver}
                    />
                )
            })}
        </GroupingLayout>
    )
}
