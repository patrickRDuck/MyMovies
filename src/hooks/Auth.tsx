import { ReactNode, createContext, useContext, useState, useEffect} from "react";
import { axios } from "../services";
import { AxiosError, AxiosResponse } from "axios";


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

export interface IValueContext {
    signIn: ({ email, password }: IParamsSignIn) => void,
    signOut: () => void,
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

            setData({token, user})

        } catch(error: unknown) {
            const axiosError = error as AxiosError<IDataAxiosResponseError>

            if(axiosError) {
                alert(axiosError.response?.data.message)
            } else {
                alert("Não foi possível realizar o login")
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@MyMovies:token')
        localStorage.removeItem('@MyMovies:user')

        setData(null)
    }

    useEffect(() => {
        const tokenStorage = localStorage.getItem('@MyMovies:token')
        const userStorage = localStorage.getItem('@MyMovies:user')

        if(tokenStorage && userStorage) {
            setData({
                token: tokenStorage,
                user: JSON.parse(userStorage)
            })
        }
    }, [])

    return(
        <AuthContext.Provider
         value={{
             user: data && data.user,
             signIn,
             signOut
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