import Image from 'next/image'

import s from './s.module.scss'
import Link from 'next/link'

export const navbarList = [
    { href: '/home', src: '/assets/navbar/home.svg' },
    { href: '/messages', src: '/assets/navbar/messages.svg' },
    { href: '/notification', src: '/assets/navbar/notification.svg' },
    { href: '/setting', src: '/assets/navbar/setting.svg' },
]

export const NavBarList = () => {
    return (
        <>
            {navbarList.map((el, i) => {
                return (
                    <li key={i}>
                        <Link href={el.href}>
                            <Image
                                alt='icon'
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
                    loading='lazy'
                    alt='logout'
                    width={50}
                    height={50}
                    src='/assets/navbar/logout.svg'
                />
            </li>
        </>
    )
}
