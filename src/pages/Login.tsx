import { api } from "../services/api"
import { AxiosResponse, AxiosError } from 'axios'
import { FormEvent, useState } from "react"

import { Checkbox } from "@radix-ui/react-checkbox"
import { Envelope, Lock } from "phosphor-react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Text } from "../components/Text"
import { TextInput } from "../components/TextInput"
import { Logo } from "../Logo"

export function Login() {
    const [isUserLogged, setIsUserLogged] = useState(false)

    async function handleLogin(e: FormEvent) {
        e.preventDefault()

        const { email, password } = e.target as typeof e.target & {
            email: { value: string }
            password: { value: string }
        }

        await api.post('/sessions', {
            email: email.value,
            password: password.value
        }).then((res: AxiosResponse) => {
            setIsUserLogged(true)
        }).catch((error: AxiosError) => {
            if (error.isAxiosError) {
                console.log('Error message: ', error.message);
                return error.message;
            } else {
                console.log('Unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        })
    }

    return (
        <div className="w-screen h-screen px-2 py-2 bg-gray-900 flex flex-col items-center justify-center text-gray-100">
            <header className="flex flex-col items-center">
                <Logo />

                <Heading
                    size="lg"
                    className="mt-4 text-center"
                >
                    Ignite Lab
                </Heading>

                <Text
                    size="lg"
                    className="text-gray-400 mt-2 text-center"
                >
                    Faça o login e comece a usar!
                </Text>
            </header>

            <form
                onSubmit={handleLogin}
                className="w-full max-w-sm flex flex-col gap-4 items-stretch mt-10"
            >
                { isUserLogged && <Text>Login realizado com sucesso!</Text>}

                <label
                    htmlFor="email"
                    className="flex flex-col gap-3"
                >
                    <Text
                        size="md"
                        className="text-gray-100 font-semibold"
                    >
                        Endereço de e-mail
                    </Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>

                        <TextInput.Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                        />
                    </TextInput.Root>
                </label>

                <label
                    htmlFor="password"
                    className="flex flex-col gap-3"
                >
                <Text
                    size="md"
                    className="text-gray-100 font-semibold"
                >
                    Sua senha
                </Text>
                <TextInput.Root>
                    <TextInput.Icon>
                    <Lock />
                    </TextInput.Icon>

                    <TextInput.Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="********"
                    />
                </TextInput.Root>
                </label>

                <label
                    htmlFor="remember"
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <Checkbox id="remember" />
                    <Text
                        size="sm"
                        className="text-gray-200"
                    >
                        Lembrar de mim por 30 dias
                    </Text>
                </label>

                <Button
                    type="submit"
                    className="mt-4"
                >
                    Entrar na plataforma
                </Button>
            </form>

            <footer className="flex flex-col items-center gap-4 mt-8">
                <Text
                    size="sm"
                    className="text-gray-400 underline hover:text-gray-200 text-center"
                >
                    <a href="">Esqueceu sua senha?</a>
                </Text>
                <Text
                    size="sm"
                    className="text-gray-400 underline hover:text-gray-200 text-center"
                >
                    <a href="">Não possui uma conta? Crie agora!</a>
                </Text>
            </footer>
        </div>
    )
}