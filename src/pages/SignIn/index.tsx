import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { FiMail, FiLock } from "react-icons/fi"
import { useAuth, IParamsSignIn } from "../../hooks/Auth.tsx";
import { ChangeEvent, useState } from "react";

export function SignIn() {
    const [email, setEmail] = useState<string | null>()
    const [password, setPassword] = useState<string | null>()

    const { signIn } = useAuth()

    function handleLogin({ email, password }: IParamsSignIn) {
        signIn({email, password})
    }

    return(
        <Container>
            <Form>
                <div className="header">
                    <h1>MyMovies</h1>
                    <span>Aplicação para acompanhar tudo o que assiste</span>
                </div>

                <h2>Faça seu login</h2>

                <div id="input-wrapper">
                    <Input
                     Icon={FiMail}
                     outline={true}
                     placeholder="E-mail"
                     type="text"
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />

                    <Input
                     Icon={FiLock}
                     outline={true}
                     placeholder="Senha"
                     type="password"
                     onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                </div>

                <Button 
                 text="Entrar"
                 type="button"
                 onClick={() => {email && password ? handleLogin({email, password}) : alert('preencha todos os campos')}}
                />

                <TextButton 
                 text="Criar conta"
                 navigation="/signup"
                 navigationObject={{replace: true}}
                />

            </Form>

            <Background />
        </Container>
    )
}