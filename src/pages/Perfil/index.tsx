import { Container, Form, Avatar} from './styles'
import { TextButton } from '../../components/TextButton'
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function Perfil() {
    return (
        <Container>
            <header>
                <Link to={'/'}>
                    <TextButton Icon={FiArrowLeft} text='Voltar'/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/patrickRDuck.png" alt="Foto de perfil" />

                    <label htmlFor="avatar">
                        <FiCamera size={15}/>

                        <input id='avatar' type='file' />
                    </label>
                </Avatar>

                <Input Icon={FiUser} defaultValue='Patrick Duarte' disabled/>
                <Input Icon={FiMail} defaultValue='patrickrd7@gmail.com' disabled/>
                <Input Icon={FiLock} placeholder='Senha atual'/>
                <Input Icon={FiLock} placeholder='Nova senha'/>

                <Button text='Salvar' width='100%'/>
            </Form>
        </Container>
    )
}