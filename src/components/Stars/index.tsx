import { Container } from './styles'
import { RiStarFill, RiStarLine } from 'react-icons/ri'

interface IProps {
    starQuantity: number
    large?: boolean
}

export function Stars({starQuantity, large = false}: IProps) {
    const filledStars = Array.from({ length: starQuantity }, (_, index) => (
        <RiStarFill key={index} size={large ? 21 : 15} />
    ));

    const lineStars = 5 - starQuantity > 0
    ? Array.from({ length: 5 - starQuantity }, (_, index) => (
        <RiStarLine key={index} size={large ? 21 : 15} />
    ))
    : [];


    return(
        <Container className='stars'>
            {filledStars}
            {lineStars}
        </Container>
    )
}