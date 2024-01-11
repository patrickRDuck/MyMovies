import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { useNavigate} from 'react-router-dom'
import { ChangeEvent, useState } from "react";
import {axios} from "../../services/index.ts"

export function SignUp() {
    const [email, setEmail ] = useState<string | null>(null)
    const [name, setName ] = useState<string | null>(null)
    const [password, setPassword ] = useState<string | null>(null)

    const navigate = useNavigate()

    async function handleRegister() {
        if(!email || !name || !password) {
            return alert('preencha todos os campos')
        }
        
        const infoToRegister = {email, name, password}
    
        await axios.post('/users', infoToRegister)
        .then(() => {
            alert('Cadastro realizado com sucesso')
            navigate('/')
        })
        .catch((error) => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível realizar o cadastro")
            }
        })
    }

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
                     type="text"
                     onChange = {(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />

                    <Input
                     outline={true}
                     Icon={FiMail}
                     placeholder="E-mail"
                     type="text"
                     onChange = {(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />

                    <Input
                     outline={true}
                     Icon={FiLock}
                     placeholder="Senha"
                     type="password"
                     onChange = {(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                </div>

                <Button 
                 type="button"  
                 text="Cadastrar" 
                 onClick = {handleRegister}
                />

                <TextButton 
                 text="Voltar para o login"
                 navigation='/'
                 navigationObject={{replace: true}}
                />
                

            </Form>

            <Background />
        </Container>
    )
}