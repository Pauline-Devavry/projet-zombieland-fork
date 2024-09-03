import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
<<<<<<< HEAD
import AttractionPage from './pages/AttractionPage.jsx'
=======
import Connexion from './pages/Connexion.jsx'
>>>>>>> 40d36496a99a68c641170fa8dddbbd9f3bb07b6c

const router = createBrowserRouter([
  {
    index: true,
    element: <App/>
  },
  {
    path: "hello",
    element: <h1 className='text-red-500'>Hello world page</h1>
<<<<<<< HEAD
  },
  {
    path: "attractions",
    element: <AttractionPage/>
=======
    
  },
  { 
    path: "connexion",
    element: <Connexion/>
>>>>>>> 40d36496a99a68c641170fa8dddbbd9f3bb07b6c
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
  )
