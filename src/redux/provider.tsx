'use client'

import { FC } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { ILayout } from '@/types/layout'

export const ReduxProvider: FC<ILayout> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
}
