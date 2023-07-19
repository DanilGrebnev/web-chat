import { FC } from 'react'
import { Layout } from '../../layouts/Layout'
import SearchIcon from '@assets/searchbar/searchicon.svg'
import Image from 'next/image'

import s from './s.module.scss'

export const SearchBar: FC = () => {
    return (
        <Layout
            boxShadow
            className={s.search_bar}
        >
            <Image
                alt='search_icon'
                width={25}
                height={25}
                src={SearchIcon}
            />
            <input
                className={s.input}
                placeholder='Search'
            />
        </Layout>
    )
}
