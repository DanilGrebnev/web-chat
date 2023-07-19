import Image from 'next/image'
import s from './s.module.scss'

export const ContactInfo = () => {
    return (
        <header className={s.contact_info}>
            <Image
                alt='contact-avatar'
                width={55}
                height={55}
                src='/assets/contactinfo.png'
            />
            <div>
                <p className={s.name}>Anil</p>
                <p className={s.date}>Online - Last seen, 2.02pm</p>
            </div>
        </header>
    )
}
