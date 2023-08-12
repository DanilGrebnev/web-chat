import { createAsyncThunk } from '@reduxjs/toolkit'

import { $axios } from '@/lib/fetchApi'

export class AuthAsynkThunkService {
    static sendLoginData = createAsyncThunk(
        'auth/SendLoginData',
        async (data: any) => {
            const response = await $axios.post('/user/login', data)

            return response
        }
    )
}
