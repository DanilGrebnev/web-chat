'use client'
import { forwardRef } from 'react'
import Image from 'next/image'
import s from './s.module.scss'

export const ContactsItem = forwardRef(function FrendsItem(props, ref) {
    return (
        <li className={s.item_wrapper}>
            <Image
                alt='avatar'
                className={s.avatar}
                width={50}
                height={50}
                src='/test_avatar.png'
            />
            <div className={s['contact-content']}>
                <h5>Friends Forever</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia tenetur non repellendus sapiente placeat ab? At est
                </p>
            </div>
            <div className={s['contact-notification']}>
                <p>Today, 9.52pm</p>
                <div className={s['circle-notification']}>4</div>
            </div>
        </li>
    )
})
