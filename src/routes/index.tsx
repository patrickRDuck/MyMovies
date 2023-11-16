import { BrowserRouter } from 'react-router-dom'
import { AppRoute } from './App.routes'
// import { AuthRoute } from './Auth.routes'

export function RoutesApplication() {
    return (
        <BrowserRouter>
            <AppRoute />

            {/* <AuthRoute /> */}
        </BrowserRouter>
    )
}

