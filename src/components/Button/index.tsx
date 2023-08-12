import s from './s.module.scss'
import cn from 'classnames'
import { Button as Btn } from 'antd'
import { FC } from 'react'
import { HTMLAttributes } from 'react'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
    htmlType?: 'submit' | 'reset' | 'button'
}

export const Button: FC<IButton> = props => {
    const { className, children } = props

    return (
        <Btn
            {...props}
            type='primary'
            className={cn(s.button, className)}
        >
            {children}
        </Btn>
    )
}
