import { FC } from 'react'
import { IInput } from './type'

import s from './s.module.scss'

export const Input: FC<IInput> = ({ name }) => {
    return (
        <div className={s.wrapper}>
            <p>{name}</p>
            <input name={name.toLowerCase()} />
        </div>
    )
}
