import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BaseLayout from "./layouts/BaseLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import Connexion from "./pages/Connexion.jsx"
import Inscription from "./pages/Inscription.jsx"
import AttractionPage from "./pages/AttractionPage.jsx"
import Contact from "./pages/Contact.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <h1>OOps ! Cannot find the page !</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "attraction",
        element: <AttractionPage/>
      },
      {
        path: "inscription",
        element: <Inscription/>
      },
      {
        path: "connexion",
        element: <Connexion/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
