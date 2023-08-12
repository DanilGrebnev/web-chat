import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthAsynkThunkService } from './thunk'

interface AuthDTO {
    accessToken: ''
    refreshToken: ''
    user: {
        _id: string
        email: string
        isActivated: boolean
    }
}

const initialState = {
    user: {
        _id: '',
        email: '',
        isActivated: false,
    },
}

export const auth = createSlice({
    name: 'auth',
    initialState,

    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(
                AuthAsynkThunkService.sendLoginData.fulfilled,
                (state, { payload }) => {
                    const { accessToken, refreshToken, user }: AuthDTO =
                        payload.data

                    state.user = user

                    window.localStorage.setItem('refreshToken', refreshToken)
                    window.localStorage.setItem('accessToken', accessToken)

                    location.href = 'http://localhost:3000/main/messages'
                }
            )
            .addCase(
                AuthAsynkThunkService.sendLoginData.pending,
                (state, action) => {}
            )
            .addCase(
                AuthAsynkThunkService.sendLoginData.rejected,
                (state, action) => {
                    console.log('rejected auth :>>', action.payload)
                }
            )
    },
})

export const {} = auth.actions
export default auth.reducer
