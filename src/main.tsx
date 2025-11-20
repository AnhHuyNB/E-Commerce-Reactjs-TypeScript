import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { ThemeProvider } from './app/providers/theme/themeProvider'
import "./app/styles/index.scss"

import './shared/config/i18n/i18n'
import { BrowserRouter } from 'react-router'
import { ErrorBoundary } from './app/providers/ErrorBounary/ui/ErrorBoundary'
import { StoreProvider } from './app/providers/StoreProvider/ui/StoreProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
)
