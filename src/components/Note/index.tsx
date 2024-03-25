import { Container } from './styles'
import { Stars } from '../Stars'
import { Tags } from '../Tags'

interface IProps {
    title: string
    starQuantity: number
    description: string
    tags: string[]
    id: number
}

export function Note({title, starQuantity, description, tags, id}: IProps) {
    return(
        <Container to={`/moviepreview/${id}`}>
            <strong> {title} </strong>

            <Stars starQuantity={starQuantity}/>

            <p>
                {
                    description.length > 400 
                    ?
                    description.substring(0, 450) + "..."
                    :
                    description
                }
            </p>

            <Tags titles={tags}/>
        </Container>
    )
} 
