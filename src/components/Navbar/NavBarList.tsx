'use client'
import cn from 'classnames'
import Image from 'next/image'

import s from './s.module.scss'
import Link from 'next/link'

import { navbarList } from './data'

export const NavBarList = () => {
    return (
        <>
            {navbarList.map((el, i) => {
                return (
                    <li key={i}>
                        <Link href={el.href}>
                            <Image
                                alt="icon"
                                width={50}
                                height={50}
                                src={el.src}
                            />
                        </Link>
                    </li>
                )
            })}
            <li className={s.logout}>
                <Image
                    loading="lazy"
                    alt="logout"
                    width={50}
                    height={50}
                    src="/assets/navbar/logout.svg"
                />
            </li>
        </>
    )
}
