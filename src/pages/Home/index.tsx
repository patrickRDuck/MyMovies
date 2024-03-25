import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { RiAddLine } from 'react-icons/ri'
import { Note } from '../../components/Note'
import { Link } from 'react-router-dom'
import {useEffect, useState } from 'react'
import { axios } from '../../services'
import { AxiosResponse } from 'axios'

interface ITags {
    id: number,
    note_id: number,
    user_id: number,
    name: string
}

interface IMovie {
    id: number,
    title: string,
    description:  string,
    rating: number,
    user_id: number,
    created_at: number,
    updated_at: number,
    tags: ITags[]
}

export function Home() {
    const [moviesList, setMovieList] = useState<IMovie[] | []>([])
    const [movieListFiltered, setMovieListFiltered] = useState<IMovie[] | []>([])

    function filterMovies(nameFilter: string) {
        if(nameFilter !== "" && moviesList.length > 0) {
            return setMovieListFiltered(moviesList.filter((movie) => movie.title.toLowerCase().includes(nameFilter.toLowerCase())))
        } 

        setMovieListFiltered([])

    }

    useEffect(() => {
        async function getMovies() {
            const response: AxiosResponse<IMovie[]> | void = await axios.get('/notes').catch((erro: unknown) => console.log(erro) )

            setMovieList(typeof response !== 'undefined' ? response.data : [])
        }

        getMovies()
    } , [])

    return (
        <Container>
            <Header functionOnChange={filterMovies}/>

            <Content>
                <div>
                    <h2>Meus filmes</h2>

                    <Link to={'/new'}>
                        <Button Icon={RiAddLine}  text='Adicionar filme' width='fit-content'/>
                    </Link>
                </div>

                <div>

                    {
                        movieListFiltered.length > 0 ?
                        movieListFiltered.map((movie) => (
                            <Note 
                             key={movie.id}
                             id={movie.id}
                             title={movie.title} 
                             starQuantity={movie.rating}
                             description={movie.description}
                             tags={movie.tags.map((tag) => tag.name)}
                            />
                        ))
                        :
                        moviesList.map((movie) => (
                            <Note 
                             key={movie.id}
                             id={movie.id}
                             title={movie.title} 
                             starQuantity={movie.rating}
                             description={movie.description}
                             tags={movie.tags.map((tag) => tag.name)}
                            />
                        ))
                    }
                </div>
            </Content>
        </Container>
    )
}