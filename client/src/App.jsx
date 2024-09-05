import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BaseLayout from "./layouts/BaseLayout.jsx"
import AttractionInfo from "./pages/AttractionInfo.jsx"
import AttractionPage from "./pages/AttractionPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <h1>Home page</h1>
      },
      {
        path: "hello",
        element: <h1>Hello page</h1>
      },
      {
        path: "AttractionPage",
        element: <AttractionPage />,
        
      },
      {
        path: "AttractionInfo",
        element: <AttractionInfo />,
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
