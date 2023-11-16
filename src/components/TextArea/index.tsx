import { Container } from './styles'

interface IProps {
    [key: string]: unknown
}

export function TextArea({...rest}: IProps) {
    return(
        <Container>
                <textarea cols={30} rows={15} {...rest}></textarea>
        </Container>
    )
}