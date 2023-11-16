import { Container } from './styles'

interface IProps {
    Icon?: JSX.ElementType
    outline?: boolean
    [key: string]: unknown
}

export function Input({Icon, outline = false ,...rest}: IProps ){
    return (
        <Container $outline={outline}>
            {Icon && <Icon size={20}/>}
            <input {...rest}/>
        </Container>
    )
}