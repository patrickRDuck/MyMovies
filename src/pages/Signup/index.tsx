import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link } from 'react-router-dom'

export function SignUp() {
    return(
        <Container>  
            <Form>
                <div className="header">
                    <h1>MyMovies</h1>
                    <span>Aplicação para acompanhar tudo o que assiste</span>
                </div>

                <h2>Crie sua conta</h2>

                <div id="input-wrapper">
                    <Input
                     outline={true}
                     Icon={FiUser}
                     placeholder="Nome"
                    />

                    <Input
                     outline={true}
                     Icon={FiMail}
                     placeholder="E-mail"
                    />

                    <Input
                     outline={true}
                     Icon={FiLock}
                     placeholder="Senha"
                    />
                </div>

                <Button text="Cadastrar"/>

                <Link to={'/'}>
                    <TextButton text="Voltar para o login"/>
                </Link>

            </Form>

            <Background />
        </Container>
    )
}