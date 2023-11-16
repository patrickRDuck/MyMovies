import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import { RoutesApplication } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme}/>

      <RoutesApplication />
    </ThemeProvider>
  </React.StrictMode>,
)
