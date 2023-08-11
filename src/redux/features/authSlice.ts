import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    value: {
        isAuth: false,
        userName: '',
        _id: '',
    },
}

export const auth = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        logOut: () => {
            return initialState
        },

        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    userName: action.payload,
                    _id: 'какой-то id',
                },
            }
        },
    },
})

export const { logIn, logOut } = auth.actions
export default auth.reducer
