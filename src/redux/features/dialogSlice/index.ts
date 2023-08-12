import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { $axios } from '@/lib/fetchApi'
import { testData } from '@/testData'
import { IDialog } from '@/types/dialog'

export const fetchDialog = createAsyncThunk('dialog/getDialogs', async () => {
    const response = await $axios.get('/dialog/' + testData.userId)

    return response.data
})

const initialState = {
    dialogs: [] as IDialog[] | [],
    currentDialogId: '',
}

export const dialogs = createSlice({
    name: 'dialogs',
    initialState,

    reducers: {
        setDialogId(state, action) {
            state.currentDialogId = action.payload
        },
    },

    extraReducers(builder) {
        builder.addCase(fetchDialog.fulfilled, (state, action) => {
            state.dialogs = action.payload
        })
    },
})

export const { setDialogId } = dialogs.actions
export default dialogs.reducer
