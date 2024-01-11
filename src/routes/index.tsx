import { BrowserRouter } from 'react-router-dom'
import { AppRoute } from './App.routes'
import { AuthRoute } from './Auth.routes'
import { useAuth } from '../hooks/Auth.tsx'

export function RoutesApplication() {
    const { user } = useAuth()

    return (
        <BrowserRouter>
            { user ? <AppRoute /> : <AuthRoute />}
        </BrowserRouter>
    )
}

