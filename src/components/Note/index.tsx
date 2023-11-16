import { Container } from './styles'
import { Stars } from '../Stars'
import { Tags } from '../Tags'

interface IProps {
    title: string
    starQuantity: number
}

export function Note({title, starQuantity}: IProps) {
    return(
        <Container>
            <strong> {title} </strong>

            <Stars starQuantity={starQuantity}/>

            <p>
                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.
            </p>

            <Tags titles={['Ficição cinetífica', 'Drama', 'Família']}/>
        </Container>
    )
}