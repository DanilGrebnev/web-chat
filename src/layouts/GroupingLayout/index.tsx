import cn from 'classnames'
import { Layout } from '../Layout'
import { forwardRef } from 'react'
import { IGroupingLayout } from './type'

import s from './s.module.scss'

/**
 * Компонент является обёрткой для
 * списка групп и контактов
 * @param title - заголовок
 * @param children - любой компонент
 */
export const GroupingLayout = forwardRef<unknown, IGroupingLayout>(
    ({ style, className, title, children }, ref) => (
        <Layout
            boxShadow
            style={style}
            className={cn(s['grouping-layout'], className)}
        >
            <h3>{title}</h3>
            <ul>{children}</ul>
        </Layout>
    )
)

GroupingLayout.displayName = 'ContactsLayout'
