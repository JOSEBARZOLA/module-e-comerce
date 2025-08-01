import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/sass/_main.scss' // estilos globales
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)