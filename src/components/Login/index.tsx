'use client'

import s from './s.module.scss'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useAppDispatch } from '@/hooks'
import { useRef } from 'react'
import { AuthAsynkThunkService } from '@/redux/features/authSlice/thunk'

export const Login = () => {
    const dispatch = useAppDispatch()

    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const sendLoginData = (e: React.FormEvent) => {
        e.preventDefault()

        const email = loginRef?.current?.value
        const password = passwordRef?.current?.value

        dispatch(AuthAsynkThunkService.sendLoginData({ email, password }))
    }

    return (
        <section
            id='Login'
            className={s.login_wrapper}
        >
            <form onSubmit={sendLoginData}>
                <Input
                    ref={loginRef}
                    name='Login'
                />
                <Input
                    password
                    ref={passwordRef}
                    name='Password'
                />
                <Button htmlType='submit'>Login</Button>
                <p>
                    Don&apos;t have account? <a>Create a new account</a>
                </p>
            </form>
        </section>
    )
}
