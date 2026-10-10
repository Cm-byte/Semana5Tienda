import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '@/styles/global.css' // Único CSS global: se importa solo aquí
import App from '@/App.jsx'

// CSR: React toma el <div id="root"> vacío y construye el DOM en el navegador.
// BrowserRouter cambia de vista sin recargar la página (SPA).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
