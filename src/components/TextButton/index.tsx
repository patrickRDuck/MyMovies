import { Container } from './styles'
import { useNavigate} from 'react-router-dom'

interface INavigateObjectOption {
    replace: boolean
}

interface IProps {
    text: string
    Icon?: JSX.ElementType
    navigation?: string | number
    navigationObject?: INavigateObjectOption
    functionOnClick?: () => void
    [key: string]: unknown
}

export function TextButton({text, Icon, navigation, navigationObject, functionOnClick, ...rest}: IProps) {
    const navigate = useNavigate()

    return(
        <Container 
         onClick={() => {
            if(navigation) {
                if(typeof navigation === 'number') {
                   navigate(navigation as number)
                } else {
                   navigate(navigation as string, navigationObject)
                }
            } else if(functionOnClick) {
                functionOnClick()
            }
         }}
         {...rest}
        >
            {Icon && <Icon size={17}/>}

            {text}
        </Container>
    )
}