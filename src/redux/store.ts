import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import authReducer from './features/authSlice'
import messageReduer from './features/messagesSlice'
import dialogReducer from './features/dialogSlice'

const rootReducer = combineReducers({
    authReducer,
    messageReduer,
    dialogReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
