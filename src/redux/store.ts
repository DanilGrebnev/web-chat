import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import authReducer from './features/authSlice'
import messageReduer from './features/messageSlice'
import dialogReducer from './features/dialogSlice'

export const store = configureStore({
    reducer: combineReducers({
        authReducer,
        messageReduer,
        dialogReducer,
    }),

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
