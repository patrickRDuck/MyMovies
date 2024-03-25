import { Container, Content, Form} from './styles'
import { Header } from '../../components/Header'
import { TextButton } from '../../components/TextButton'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NotemItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ChangeEvent, useState } from 'react'
import { axios } from '../../services'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

export function New() {
    const [title, setTitle] = useState<string>('')
    const [rating, setRating] = useState<number>()
    const [description, setDescription] = useState<string>()
    const [tags, setTags] = useState<string[]>([])
    const [writingNewTag, setWritingNewTag] = useState('')

    const navigate = useNavigate()

    function valibleNumber(event: React.ChangeEvent<HTMLInputElement>): void {
        if( event.target.valueAsNumber < 1 ) {
            event.target.valueAsNumber = 1
        } else if ( event.target.valueAsNumber > 5) {
            event.target.valueAsNumber = 5
        }
    }

    function handleSaveTag (name: string) {
        if (tags !== undefined) {
            controllerTagsArray(name)
        } else {
            setTags([name])
        }
    }

    function handleDeleteTag(name: string) {
        const tagsFiltered = tags.filter((tag) => tag !== name)

        setTags(tagsFiltered)
    }

    function controllerTagsArray(element: string) {
        if ( tags && tags.length < 4) {
            const prevState = tags
            setTags([...prevState, element])
        }
    }

    async function handleCreateNote() {
        if(tags.length === 0 || title === "" || description === "" || rating === undefined || rating === 0) {
            return toast.error("Existe campos não preenchidos! favor preenche-los para salvar a nota")
        }
        if(writingNewTag !== "") {
            return toast.error("Existe uma tag escrita que não foi adicionada a lista, favor remover ou salva-la")
        }

        await axios.post('/notes', {
            title,
            rating,
            description,
            tags
        }).catch((error:unknown) => {
            const axiosError = error as AxiosError
            console.error(axiosError.message)
        })
        
        navigate(-1)
        toast.success("Nota criada com sucesso")
    }

    return(
        <Container>
            <Header withoutInput={true} />

            <Content>
                <TextButton 
                 Icon={FiArrowLeft} 
                 text='Voltar'
                 navigation={-1}
                />

                <strong>Novo Filme</strong>

                <Form>
                    <div>
                        <Input 
                         placeholder='Título' 
                         outline={true} 
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        />
                        <Input 
                         placeholder='Sua nota (de 1 a 5)' 
                         type='number' min='1' max='5' 
                         onInput={valibleNumber} 
                         outline={true}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value))}
                        />
                    </div>

                    <TextArea 
                     onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)} 
                     placeholder='Observações'
                    />

                    <div>
                        <span>Marcadores</span>

                        <div id='tags'>
                            {
                                tags && tags.map((tag, index) => (
                                    <NotemItem 
                                     title={tag}  
                                     key={index}
                                     functionDeleteTagOnClick={() => handleDeleteTag(tag)}
                                    />
                                ))
                            }
                            {
                                tags.length < 4 ?
                                <NotemItem
                                 isNew={true} 
                                 placeholder='Novo marcador'
                                 functionSaveTagOnClick={(name: string) => handleSaveTag(name)}
                                 functioSetState={setWritingNewTag}
                                />
                                : null
                            }
                        </div>
                    </div>

                    <div>
                        <Button
                         text='Salvar alterações'
                         type="button"
                         onClick={handleCreateNote}
                        />
                    </div>
                </Form>
            </Content>
        </Container>
    )
}