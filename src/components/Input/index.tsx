import { FC } from 'react'
import { IInput } from './type'
import cn from 'classnames'
import s from './s.module.scss'

export const Input: FC<IInput> = ({
    name,
    password,
    style,
    className,
    fontSize,
}) => {
    const styles = {
        ...style,
        fontSize: cn({ [`${fontSize}px`]: fontSize }),
    }

    return (
        <div className={cn(s.wrapper, className)}>
            <p>{name}</p>
            <input
                style={styles}
                type={password ? 'password' : 'text'}
                name={name.toLowerCase()}
            />
        </div>
    )
}
