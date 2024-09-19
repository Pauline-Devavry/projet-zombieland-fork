import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout.jsx";
import NotFoundPage from "./pages/404.jsx";
import HomePage from "./pages/HomePage.jsx";
import AttractionPage from "./pages/AttractionPage.jsx";
import Inscription from "./pages/Inscription.jsx";
import Connexion from "./pages/Connexion.jsx";
import Contact from "./pages/Contact.jsx";
import Accordion from "./pages/FaqPage.jsx";
import AttractionInfo from "./pages/AttractionInfo.jsx";
import UserLayout from "./layouts/UserLayout.jsx";
import UserReservation from "./pages/UserReservation.jsx";
import UserProfil from "./pages/UserProfil.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Overview from "./pages/admin/Overview.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Reservation from "./pages/Reservation.jsx";
import MessagePage from "./pages/admin/MessagePage.jsx";
import MessageDetails from "./pages/admin/MessageDetails.jsx";
import ReservationsPage from "./pages/admin/ReservationsPage.jsx";
import ReservationDetails from "./pages/admin/ReservationDetails.jsx";
import AttractionsPage from "./pages/admin/AttractionsPage.jsx";
import AttractionAddForm from "./pages/admin/AttractionAddForm.jsx";
import AttractionEditForm from "./pages/admin/AttractionEditForm.jsx";

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
        path: "reserver",
        element: (
          <ProtectedRoute>
            <Reservation />
          </ProtectedRoute>
        ),
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
        path: "faq",
        element: <Accordion/>,
      },
      {
        path: "attraction/:id",
        element: <AttractionInfo />,
      },
      {
        path: "profil",
        element: (
            <ProtectedRoute>
                <UserLayout/>
            </ProtectedRoute>
        ),
        children: [
          {
            path: "reservations",
            element: (
              <ProtectedRoute>
                <UserReservation />
              </ProtectedRoute>
            ),
          },
          {
            index: true,
            element: <UserProfil />,
          },
        ],
      },
    ],
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute adminOnly={true}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
            {
                index: true,
                element: <Overview/>
            },
            {
                path: "messages",
                element: <MessagePage/>
            },
            {
                path: "message/:id",
                element: <MessageDetails/>
            },
            {
                path: "membres",
                element: <h1>Members page</h1>
            },
            {
                path: "reservations",
                element: <ReservationsPage/>
            },
            {
                path: "reservations/:id",
                element: <ReservationDetails/>
            },
            {
                path: "billets",
                element: <h1>billets page</h1>
            },
            {
                path: "categories",
                element: <h1>category page</h1>
            },
            {
                path: "attractions",
                element: <AttractionsPage />
            },
            {
                path: "attractions/ajouter",
                element: <AttractionAddForm />
            },
            {
                path: "attractions/:id",
                element: <AttractionEditForm />
            }
    ],
  },
]);

export default router;
