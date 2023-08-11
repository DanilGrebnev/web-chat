import { $axios } from '@/lib/fetchApi'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface MessageData {
    text: string
    senderId: string
    dialogId: string
}

export const fetchMessages = createAsyncThunk(
    'message/fetchMessagesByDialogId',
    async (dialogId: string) => {
        const response = await $axios.get('/messages/' + dialogId)

        return response.data
    }
)

export const sendMessage = createAsyncThunk(
    'message/sendMessage',

    async (data: MessageData) => {
        const response = await $axios.post('/messages', data)
        return response.data
    }
)

const initialState = {
    messages: [],
    loading: false,
}

export const message = createSlice({
    name: 'auth',
    initialState,

    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(fetchMessages.fulfilled, (state, action) => {
                console.log('fetchMessages response :>> ', action.payload)
                state.messages = action.payload
            })
            .addCase(fetchMessages.pending, (state, action) => {})
            .addCase(fetchMessages.rejected, (state, action) => {
                console.log('fetchMessages.rejected :>>', action.payload)
            })
            .addCase(sendMessage.fulfilled, (_, action) => {
                console.log('sendMessaage response :>>', action.payload)
            })
    },
})

export const {} = message.actions
export default message.reducer
