import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import { RoutesApplication } from './routes'
import { AuthProvider } from './hooks/Auth.tsx'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Toaster 
       richColors 
       expand={false}
      />
      <GlobalStyle theme={theme}/>

      <AuthProvider>
        <RoutesApplication />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
