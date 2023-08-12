import { $axios } from '@/lib/fetchApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface MessageData {
    text: string
    senderId: string
    dialogId: string
}

export class MessageAsynkThunkService {
    static fetchMessages = createAsyncThunk(
        'message/fetchMessagesByDialogId',
        async (dialogId: string) => {
            const response = await $axios.get('/messages/' + dialogId)

            return response.data
        }
    )

    static sendMessage = createAsyncThunk(
        'message/sendMessage',

        async (data: MessageData) => {
            const response = await $axios.post('/messages', data)

            return response.data
        }
    )
}
