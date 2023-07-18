import cn from 'classnames'
import { Layout } from '../Layout'
import s from './s.module.scss'
import { forwardRef } from 'react'
import { IGroupingLayout } from './type'

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
