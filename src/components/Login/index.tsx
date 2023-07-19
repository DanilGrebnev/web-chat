'use client'

import s from './s.module.scss'
import { Input } from './Input'

export const Login = () => {
    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <section
            id="Login"
            className={s.login_wrapper}
        >
            <form onSubmit={onSubmit}>
                <Input name="Login" />
                <Input name="Password" />
                <button>Login</button>
            </form>
        </section>
    )
}
