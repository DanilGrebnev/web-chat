import { FC, forwardRef } from 'react'
import { ILayout } from './type'

import cn from 'classnames'
import s from './s.module.scss'

export const Layout: FC<ILayout> = ({
    id,
    children,
    style,
    className,
    tag = 'div',
    color = 'white',
    boxShadow = false,
    ...props
}) => {
    const Tag = tag

    return (
        <Tag
            id={id}
            style={style}
            className={cn(s.Layout, s[color], className, {
                [s['box-shadow']]: boxShadow,
            })}
            {...props}
        >
            {children}
        </Tag>
    )
}

Layout.displayName = 'Layout'
