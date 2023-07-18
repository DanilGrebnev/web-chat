import { forwardRef } from 'react'
import { ILayout } from './type'

import cn from 'classnames'
import s from './s.module.scss'

export const Layout = forwardRef<unknown, ILayout>(
    (
        {
            id,
            children,
            style,
            className,
            tag = 'div',
            color = 'white',
            boxShadow = false,
        },
        ref
    ) => {
        const Tag = tag

        return (
            <Tag
                id={id}
                style={style}
                className={cn(s.Layout, className, s[color], {
                    [s['box-shadow']]: boxShadow,
                })}>
                {children}
            </Tag>
        )
    }
)

Layout.displayName = 'Layout'
