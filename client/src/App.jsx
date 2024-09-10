import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Connexion from "./pages/Connexion.jsx";
import Inscription from "./pages/Inscription.jsx";
import AttractionPage from "./pages/AttractionPage.jsx";
import Contact from "./pages/Contact.jsx";
import UserReservation from "./pages/UserReservation.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Overview from "./pages/admin/Overview.jsx";
import UserProfil from "./pages/UserProfil.jsx";
import Accordion from "./pages/FaqPage.jsx";
import TestPage from "./pages/TestPage.jsx";
import NotFoundPage from "./pages/404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "attractions",
        element: <AttractionPage />,
      },
      {
        path: "inscription",
        element: <Inscription />,
      },
      {
        path: "connexion",
        element: <Connexion />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "utilisateur/reservations",
        element: <UserReservation />,
      },
      {
        path: "utilisateur/profil",
        element: <UserProfil />,
      },
      {
        path: "faq",
        element: <Accordion />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
