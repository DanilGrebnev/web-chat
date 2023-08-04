'use client'
import React, { FC } from 'react'

import { Layout } from '@/layouts/Layout'
import { IMessageItem } from './type'

import cn from 'classnames'
import s from './s.module.scss'

export const MessageItem: FC<IMessageItem> = React.memo(({ author, text }) => {
    return (
        <li className={cn({ [s.author]: author })}>
            <Layout
                color='purple'
                className={cn(s.message)}
            >
                {text}
            </Layout>
        </li>
    )
})

MessageItem.displayName = 'MessageItem'
