import { Container, Tag } from './styles'

interface IProps {
    titles: string[]
    large?: boolean
}

export function Tags({titles, large = false}: IProps) {
    return(
        <Container>
            {titles.map((title, index) => {
                return (
                    <Tag $large={large} key={index}>
                        {title}
                    </Tag>
                )
            })}
        </Container>
    )
}