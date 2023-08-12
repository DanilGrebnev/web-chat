import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { MessageAsynkThunkService } from './thunk'

const initialState = {
    messages: [],
    loading: false,
    error: false,
}

export const message = createSlice({
    name: 'auth',
    initialState,

    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(
                MessageAsynkThunkService.fetchMessages.fulfilled,
                (state, action) => {
                    // console.log('fetchMessages response :>> ', action.payload)
                    state.messages = action.payload
                }
            )
            .addCase(
                MessageAsynkThunkService.fetchMessages.pending,
                (state, action) => {}
            )
            .addCase(
                MessageAsynkThunkService.fetchMessages.rejected,
                (state, action) => {
                    // console.log('fetchMessages.rejected :>>', action.payload)
                }
            )
            .addCase(
                MessageAsynkThunkService.sendMessage.fulfilled,
                (_, action) => {
                    window.location.reload()
                }
            )
            .addCase(
                MessageAsynkThunkService.sendMessage.rejected,
                (state, action) => {
                    console.log('sendMessage.rejected :>>', action.payload)
                    state.error = true
                }
            )
    },
})

export const {} = message.actions
export default message.reducer
