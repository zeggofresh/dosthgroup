import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser'
import './index.css'
import './green-blue-theme.css'
import App from './App.jsx'

// Initialize EmailJS
emailjs.init('qNovM_iqvAoBrJ6cj');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
