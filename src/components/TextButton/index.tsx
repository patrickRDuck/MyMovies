import { Container } from './styles'

interface IProps {
    text: string
    Icon?: JSX.ElementType
    [key: string]: unknown
}

export function TextButton({text, Icon, ...rest}: IProps) {
    return(
        <Container {...rest}>
            {Icon && <Icon size={17}/>}

            {text}
        </Container>
    )
}