import { FC } from 'react'
import { IInput } from './type'
import { forwardRef } from 'react'
import cn from 'classnames'
import s from './s.module.scss'

export const Input = forwardRef<HTMLInputElement, IInput>(
    ({ name, password, style, className, fontSize }, ref) => {
        const styles = {
            ...style,
            fontSize: cn({ [`${fontSize}px`]: fontSize }),
        }

        return (
            <div className={cn(s.wrapper, className)}>
                <p>{name}</p>
                <input
                    ref={ref}
                    title='login input'
                    style={styles}
                    type={password ? 'password' : 'text'}
                    name={name.toLowerCase()}
                />
            </div>
        )
    }
)

Input.displayName = 'Input'
