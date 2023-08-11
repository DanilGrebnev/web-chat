import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

const rootReducer = combineReducers({ authReducer })

export const store = configureStore({
    reducer: rootReducer,
})

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
