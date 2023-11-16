import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <Container>
            <Link to={'/'}>
                <h1>MyMovies</h1>
            </Link>

            <Input placeholder='Pesquisar pelo título'/>

            <Profile>
                <div>
                    <p>Patrick Duarte</p>
                    <a href="#">Sair</a>
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