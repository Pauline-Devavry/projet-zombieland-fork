import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AttractionPage from './pages/AttractionPage.jsx'

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
    path: "attractions",
    element: <AttractionPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
  )
