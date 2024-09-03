import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BaseLayout from "./layouts/BaseLayout.jsx"
import HomePage from "./pages/HomePage.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "hello",
        element: <h1>Hello page</h1>
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
