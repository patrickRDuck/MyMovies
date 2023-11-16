import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { RiAddLine } from 'react-icons/ri'
import { Note } from '../../components/Note'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <Container>
            <Header />

            <Content>
                <div>
                    <h2>Meus filmes</h2>

                    <Link to={'/new'}>
                        <Button Icon={RiAddLine}  text='Adicionar filme' width='fit-content'/>
                    </Link>
                </div>

                <div>
                    <Link to={'/moviepreview'}>
                        <Note title='Interestellar' starQuantity={4}/>
                    </Link>

                    <Link to={'/moviepreview'}>
                        <Note title='Interestellar' starQuantity={4}/>
                    </Link>

                    <Link to={'/moviepreview'}>
                        <Note title='Interestellar' starQuantity={4}/>
                    </Link>

                    <Link to={'/moviepreview'}>
                        <Note title='Interestellar' starQuantity={4}/>
                    </Link>
                </div>
            </Content>
        </Container>
    )
}