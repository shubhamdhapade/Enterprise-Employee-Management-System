import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './app/router/AppRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme/theme'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import { store } from './app/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AppRouter />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
