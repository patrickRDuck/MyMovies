import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from 'react-router-dom'

export function SignIn() {
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
                    />

                    <Input
                    Icon={FiLock}
                    outline={true}
                    placeholder="Senha"
                    />
                </div>

                <Button text="Entrar"/>

                <Link to={'/signup'}>
                    <TextButton text="Criar conta"/>
                </Link>

            </Form>

            <Background />
        </Container>
    )
}