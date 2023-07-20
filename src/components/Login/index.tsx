import s from './s.module.scss'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export const Login = () => {
    return (
        <section
            id="Login"
            className={s.login_wrapper}
        >
            <form>
                <Input name="Login" />
                <Input
                    password
                    name="Password"
                />
                <Button>Login</Button>
                <p>
                    Don&apos;t have account? <a>Create a new account</a>
                </p>
            </form>
        </section>
    )
}
