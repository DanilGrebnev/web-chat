import s from './s.module.scss'
import cn from 'classnames'
import { Button as Btn } from 'antd'
import type { Button as BtnType } from 'antd'
import { FC } from 'react'

export const Button: FC<any> = props => {
    const { className, children } = props

    return (
        <Btn
            {...props}
            type="primary"
            className={cn(s.button, className)}
        >
            {children}
        </Btn>
    )
}
