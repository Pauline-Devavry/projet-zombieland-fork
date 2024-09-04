import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Connexion from './pages/Connexion.jsx'
import Inscription from './pages/Inscription.jsx'

const router = createBrowserRouter([
  {
    index: true,
    element: <App/>
  },
  {
    path: "hello",
    element: <h1 className='text-red-500'>Hello world page</h1>
    
  },
  { 
    path: "connexion",
    element: <Connexion/>
  },
  {
    path: "inscription",
    element: <Inscription/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
  )
