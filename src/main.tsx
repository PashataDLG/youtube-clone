import 'regenerator-runtime/runtime';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppContextProvider } from './context/App.context.tsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </Router>
    </StrictMode>,
)
