import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css' // Ruta actualizada
import App from './pages/App.tsx' // Ruta actualizada

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
