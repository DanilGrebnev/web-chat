import { FC } from 'react'
import { IInput } from './type'

import s from './s.module.scss'

export const Input: FC<IInput> = ({ name, password }) => {
    return (
        <div className={s.wrapper}>
            <p>{name}</p>
            <input
                type={password ? 'password' : 'text'}
                name={name.toLowerCase()}
            />
        </div>
    )
}
