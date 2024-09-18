import {createBrowserRouter} from "react-router-dom";
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
                element: <Reservation/>
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
                element: <Accordion />,
            },
            {
                path: "attraction/:id",
                element: <AttractionInfo />,
            },
            {
                path: "profil",
                element: <UserLayout />,
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
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <Overview/>
            }
        ]
    }
]);

export  default  router