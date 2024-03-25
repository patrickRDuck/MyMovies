import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/Auth.tsx'
import { ChangeEvent } from 'react'
import userProfileImage from '../../assets/user.png'

interface IHeaderProps {
    withoutInput?: boolean
    functionOnChange?: (nameFilter: string) => void
}

export function Header({withoutInput = false, functionOnChange}: IHeaderProps) {
    const {signOut, user } = useAuth()
    const navigate = useNavigate()

    const avatarURL = user.avatar ? `http://localhost:3333/files/${user.avatar}` : userProfileImage

    const name = user.name.split(" ")

    function handleSignOut() {
        signOut()
        navigate('/')
    }

    return (
        <Container $withoutInput={withoutInput}>
            <Link to={'/'}>
                <h1>MyMovies</h1>
            </Link>
            
            {
                withoutInput ? 
                null 
                :  
                <Input 
                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    if(functionOnChange) {
                        functionOnChange(e.target.value)
                    }
                 } } 
                 placeholder='Pesquisar pelo título'
                />
            }

            <Profile>
                <div>
                    <p>
                        {`${name[0]} ${name.length > 0 ? name[name.length - 1] : null}` }
                    </p>
                    <button 
                     onClick={handleSignOut}
                    >
                        Sair
                    </button>
                </div>

                <Link to={'/perfil'}>
                    <img
                     src= {avatarURL}
                     alt="Foto de perfil"
                    />
                </Link>
            </Profile>
        </Container>
    )
}