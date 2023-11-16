import { Container } from './styles'
import { RiAddLine, RiCloseFill } from 'react-icons/ri'

interface IProps {
    isNew?: boolean
    title?: string
    onClick?: () => void
    [key: string]: unknown
}

export function NotemItem({isNew = false, title, onClick, ...rest }: IProps) {
    return(
        <Container $isNew={isNew}>
            <input type='text' defaultValue={title} readOnly={!isNew} {...rest} />
            <button onClick={onClick && onClick}>
                {isNew ? <RiAddLine size={22} /> : <RiCloseFill size={22} />}
            </button>
        </Container>
    )
}