import { ReactNode, createContext, useContext, useState, useEffect} from "react";
import { axios } from "../services";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "sonner";

interface IProps {
    children: ReactNode
}

export interface IUser {
    avatar?: null | string,
    created_at?: string,
    email: string,
    id?: number,
    name: string,
    password?: string | null | undefined,
    old_password?: string | null | undefined,
    updated_at?: string
}

interface IDataAxiosResponse {
    token: string,
    user: IUser
}

interface IDataAxiosResponseError {
    message: string,
    code: number
}

export interface IParamsSignIn {
    email: string,
    password: string
}

interface IParamsUpdateDataUser {
    user: IUser,
    avatarFile?: File | null
}

export interface IValueContext {
    signIn: ({ email, password }: IParamsSignIn) => void,
    signOut: () => void,
    updateDataUser: ({user, avatarFile}: IParamsUpdateDataUser) => Promise<void>
    user: IUser
}

const AuthContext = createContext({})

function AuthProvider( { children }: IProps) {
    const [data, setData] = useState<IDataAxiosResponse | null>()

    async function signIn({email, password}: IParamsSignIn) {
        try{
            const response: AxiosResponse<IDataAxiosResponse> = await axios.post('/sessions', {email, password})
            const { token, user} = response.data

            localStorage.setItem('@MyMovies:token', token)
            localStorage.setItem('@MyMovies:user', JSON.stringify(user))

            axios.defaults.headers.common.Authorization = `Bearer ${token}`

            setData({token, user})

        } catch(error: unknown) {
            const axiosError = error as AxiosError<IDataAxiosResponseError>

            if(axiosError) {
                toast.error(axiosError.response?.data.message)
            } else {
                toast.error("Não foi possível realizar o login")
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@MyMovies:token')
        localStorage.removeItem('@MyMovies:user')

        setData(null)
    }

    async function updateDataUser({user, avatarFile}: IParamsUpdateDataUser) {
        try {
            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await axios.patch<IUser>("/users/avatar", fileUploadForm)
                console.log(response)
                user.avatar = response.data.avatar
            }

            await axios.put("users", user)
            localStorage.setItem('@MyMovies:user', JSON.stringify(user))

            setData({token: (data as IDataAxiosResponse).token, user})
            toast.success("Usuário atualizado com sucesso!")
        } catch(error: unknown) {
            const axiosError = error as AxiosError<IDataAxiosResponseError>

            if(axiosError.response) {
                toast.error(axiosError.response.data.message)
            } else {
                toast.error("Não foi possível atualizar os dados da conta")
            }
        }
    }

    useEffect(() => {
        const tokenStorage = localStorage.getItem('@MyMovies:token')
        const userStorage = localStorage.getItem('@MyMovies:user')

        if(tokenStorage && userStorage) {
            setData({
                token: tokenStorage,
                user: JSON.parse(userStorage)
            })

            axios.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`
        }
    }, [])

    return(
        <AuthContext.Provider
         value={{
             user: data && data.user,
             signIn,
             signOut,
             updateDataUser
         }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context as IValueContext
}

// eslint-disable-next-line react-refresh/only-export-components
export {useAuth, AuthProvider}