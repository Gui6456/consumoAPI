import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Pokedex from './Pokedex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App /> */}
    <Pokedex />
  </StrictMode>,
)
