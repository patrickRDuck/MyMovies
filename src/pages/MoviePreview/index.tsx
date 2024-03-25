import { Container, Content, Profile} from "./styles";
import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { FiArrowLeft } from "react-icons/fi";
import { MdDelete } from "react-icons/md"
import { Stars } from "../../components/Stars";
import { CiClock2 } from "react-icons/ci";
import { Tags } from "../../components/Tags";
import { useEffect, useState } from "react";
import { axios } from "../../services";
import { useParams, useNavigate} from "react-router-dom";
import { toast } from "sonner";
import { AxiosError } from "axios";

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
    created_at: Date,
    updated_at: Date,
    tags: ITags[]
}

export function MoviePreview() {
    const navigate = useNavigate()

    const [date, setDate] = useState<string>()
    const [time, setTime] = useState<string>()
    const formatDate = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'numeric', year: 'numeric' })

    const { id: movieId} = useParams()
    const [movie, setMovie] = useState<IMovie>()

    function handleDeleteNote() {
        toast("Tem certeza que deseja excluir essa nota?", {
            action: {
                label: "Apgar notar",
                onClick: () => {
                    axios.delete(`/notes/${movieId}`)
                    .catch((error: unknown) => {
                        const axiosError = error as AxiosError
                        console.error(axiosError.message)
                    })

                    toast.success("Nota deletada com sucesso")
                    navigate(-1)
                }
            }
        })
    }

    useEffect(() => {
        async function showMovie() {
            try {
                const response = await axios.get<IMovie>(`/notes/${movieId}`).catch((error: unknown) => console.log(error))
    
               if(typeof response !== "undefined") {
                setMovie(response.data)

                const created_at = new Date(response.data.created_at)
                const updated_at = new Date(response.data.updated_at)

                if(created_at > updated_at) {
                    setDate(String(formatDate.format(created_at)))
                    setTime(`${String(created_at.getHours()).padStart(2, '0')}:${String(created_at.getMinutes()).padStart(2, '0')}`)
                } else {
                    setDate(String(formatDate.format(updated_at)))
                    setTime(`${String(updated_at.getHours()).padStart(2, '0')}:${String(updated_at.getMinutes()).padStart(2, '0')}`)
                }
               } 
            } catch (error: unknown) {
                console.log(error)
            }
        }

        showMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Container>
            <Header withoutInput={true}/>

            <Content>

                <div id="noteButtons">
                    <TextButton 
                     Icon={FiArrowLeft} 
                     text='Voltar'
                     navigation={-1}
                    />

                    <TextButton 
                     Icon={MdDelete}
                     text="Deletar"
                     functionOnClick={handleDeleteNote}
                    />
                </div>


                <div className="header">
                    <div>
                        <strong> {movie && movie.title} </strong>
                        <Stars starQuantity={movie ? movie.rating : 1} large={true}/>
                    </div>

                    <div>
                        <Profile>
                            <img
                             src="https://github.com/patrickRDuck.png"
                             alt="Foto de perfil"
                            />
                        </Profile>

                        <span>Por Patrick Duarte</span>
                        <span>
                            <CiClock2 size={16}/>
                            {date} às {time}
                        </span>
                    </div>

                    <Tags large={true} titles={movie ? movie.tags.map((tag) => tag.name) : []}/>
                </div>

                <p>
                   {movie && movie.description}
                </p>
            </Content>
        </Container>
    )
}