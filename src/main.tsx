import { createRoot } from 'react-dom/client'
import './ui/index.css'
import App from './ui/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </StrictMode>,
)



