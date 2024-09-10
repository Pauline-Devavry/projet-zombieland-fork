import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BaseLayout from "./layouts/BaseLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import Connexion from "./pages/Connexion.jsx"
import Inscription from "./pages/Inscription.jsx"
import AttractionPage from "./pages/AttractionPage.jsx"
import Contact from "./pages/Contact.jsx"
import UserReservation from "./pages/UserReservation.jsx"
import AdminLayout from "./layouts/AdminLayout.jsx"
import Overview from "./pages/admin/Overview.jsx"
import MessagePage from "./pages/admin/MessagesPage.jsx"


const router = createBrowserRouter([
<<<<<<< HEAD
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
				path: "attractions",
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
			},
			{
				path: "user/reservations",
				element: <UserReservation/>
			}
		]
	},
	{
		path: "/admin",
		element: <AdminLayout/>,
		children: [
			{
				index: true,
				element: <Overview/>
			},
      {
        path: "membres",
        element: <h1>members page</h1>
      },
      {
        path: "messages",
        element: <MessagePage/>
      },
      {
        path: "reservations",
        element: <h1>reservations page</h1>
      },
      {
        path: "categories",
        element: <h1>categories page</h1>
      },
		]
	}
])
=======

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
      path: "attractions",
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
    },
    {
      path: "user/reservations",
      element: <UserReservation/>
    }
  ]
}
>>>>>>> 88f71c296e15818b19eb4eba0264237c1b9c8f8d

function App() {
	
	return (
		<RouterProvider router={router}/>
	)
}

export default App
