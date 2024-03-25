import { Container, Form, Avatar} from './styles'
import { TextButton } from '../../components/TextButton'
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/Auth'
import userProfileImage from '../../assets/user-big.png'
import { ChangeEvent, useState } from 'react'
import {axios} from "../../services/index"
import { toast } from 'sonner'


export function Perfil() {
    const {user, updateDataUser} = useAuth()

    const avatarURL = user.avatar ? `${axios.defaults.baseURL}/files/${user.avatar}` : userProfileImage
    
    const [name, setName] = useState<string>(user.name)
    const [email, setEmail] = useState<string>(user.email)
    const [newPassword, setNewPassword] = useState<string>("")
    const [oldPassword, setOldPassword] = useState<string>("")
    const [avatarFile, setAvatarFile] = useState<File | null>(null)
    const [avatar, setAvatar] = useState<string>(avatarURL)

    async function handleUpdateUserData() { 
        if(newPassword && !oldPassword) {
            return toast.error("Para atualizar a senha é necessário informar sua senha atual")
        }

        user.email = email.replace(/\s/g, '') !== "" ? email : user.email
        user.name = name.replace(/\s/g, '') !== "" ? name : user.name
        user.password = newPassword.replace(/\s/g, '') !== "" ? newPassword : null
        user.old_password = oldPassword.replace(/\s/g, '') !== "" ? oldPassword : null

        setNewPassword("")
        setOldPassword("")
        
        await updateDataUser({user, avatarFile})
    }

    function handleChangeAvatar(e: ChangeEvent<HTMLInputElement>) {
        const files = e.target.files

        if(files && files.length > 0) {
            const file = files[0]
            setAvatarFile(file)

            const imagePreview = URL.createObjectURL(file)
            setAvatar(imagePreview)
        }
    }

    return (
        <Container>
            <header>
                <TextButton
                 Icon={FiArrowLeft} 
                 text='Voltar'
                 navigation='/'
                />
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto de perfil" />

                    <label htmlFor="avatar">
                        <FiCamera size={15}/>

                        <input onChange={handleChangeAvatar} id='avatar' type='file' />
                    </label>
                </Avatar>

                <Input 
                 Icon={FiUser} 
                 onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
                 value={name}
                />
                <Input 
                 Icon={FiMail} 
                 onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                 value={email}
                />
                <Input 
                 Icon={FiLock} 
                 value={oldPassword} 
                 onChange={(e: ChangeEvent<HTMLInputElement>) => setOldPassword(e.target.value)} 
                 placeholder='Senha atual'
                 type="password"
                />
                <Input 
                 Icon={FiLock} 
                 value={newPassword} 
                 onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)} 
                 placeholder='Nova senha'
                 type="password"
                />

                <Button type="button" onClick={handleUpdateUserData} text='Salvar' width='100%'/>
            </Form>
        </Container>
    )
}