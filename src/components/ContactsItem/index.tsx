'use client'
import { forwardRef } from 'react'
import Image from 'next/image'
import s from './s.module.scss'

interface IProps extends React.HTMLAttributes<HTMLLIElement> {
    receiver: {
        _id: string
        fullName: string
        avatar: string
    }
}

export const ContactsItem = forwardRef<HTMLLIElement, IProps>(
    ({ receiver, ...otherProps }, ref) => {

        
        return (
            <li
                ref={ref}
                className={s.item_wrapper}
                {...otherProps}
            >
                <Image
                    alt='avatar'
                    className={s.avatar}
                    width={50}
                    height={50}
                    src='/test_avatar.png'
                />
                <div className={s['contact-content']}>
                    <h5>{receiver?.fullName}</h5>
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
    }
)

ContactsItem.displayName = 'ContactsItem'
