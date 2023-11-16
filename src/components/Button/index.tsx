import { Container } from './styles'

interface IProps {
    text: string
    Icon?: JSX.ElementType
    width?: string
    darkTheme?: boolean
    [key: string]: unknown
}

export function Button({text, Icon, width, darkTheme = false ,...rest}: IProps) {
    return (
        <Container $darkTheme={darkTheme} width={width ? width : '100%'}>
            <button {...rest}>
                {Icon && <Icon size={20}/>}
                {text}
            </button>
        </Container>
    )
}