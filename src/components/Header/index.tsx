import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/Auth.tsx'

export function Header() {
    const {signOut} = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        signOut()
        navigate('/')
    }

    return (
        <Container>
            <Link to={'/'}>
                <h1>MyMovies</h1>
            </Link>

            <Input placeholder='Pesquisar pelo título'/>

            <Profile>
                <div>
                    <p>Patrick Duarte</p>
                    <button 
                     onClick={handleSignOut}
                    >
                        Sair
                    </button>
                </div>

                <Link to={'/perfil'}>
                    <img
                    src="https://github.com/patrickRDuck.png"
                    alt="Foto de perfil"
                    />
                </Link>
            </Profile>
        </Container>
    )
}