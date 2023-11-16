import { Container, Content, Form} from './styles'
import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NotemItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function New() {

    function valibleNumber(event: React.ChangeEvent<HTMLInputElement>): void {
        if( event.target.valueAsNumber < 1 ) {
            event.target.valueAsNumber = 1
        } else if ( event.target.valueAsNumber > 5) {
            event.target.valueAsNumber = 5
        }
    }


    return(
        <Container>
            <Header />

            <Content>
                <Link to={'/'}>
                    <TextButton Icon={FiArrowLeft} text='Voltar'/>
                </Link>

                <strong>Novo Filme</strong>

                <Form>
                    <div>
                        <Input placeholder='Título' outline={true}/>
                        <Input placeholder='Sua nota (de 0 a 5)' type='number' min='1' max='5' onInput={valibleNumber} outline={true}/>
                    </div>

                    <TextArea placeholder='Observações'/>

                    <div>
                        <span>Marcadores</span>

                        <div id='tags'>
                            <NotemItem title='React'/>
                            <NotemItem isNew={true} placeholder='Novo marcador'/>
                        </div>
                    </div>

                    <div>
                        <Button text='Excluir filme' darkTheme={true}/>
                        <Button text='Salvar alterações'/>
                    </div>
                </Form>
            </Content>
        </Container>
    )
}