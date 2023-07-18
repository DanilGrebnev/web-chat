import { FC } from 'react'
import { IAvatar } from './type'

import Image from 'next/image'
import avatar from '@assets/avatar/avatar.png'
import cn from 'classnames'
import s from './s.module.scss'

export const Avatar: FC<IAvatar> = ({ className }) => (
    <Image
        className={cn(className, s.image)}
        alt='Avatar profile'
        width={78}
        height={78}
        placeholder='blur'
        src={avatar}
    />
)
