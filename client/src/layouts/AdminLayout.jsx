import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faSquarePollVertical, 
    faUsers, 
    faComments, 
    faCalendarDays, 
    faTicketSimple, 
    faTags,faFontAwesome,
    faArrowLeft 
} from '@fortawesome/free-solid-svg-icons'
import Logo from "../components/Logo"
import MenuLink from '../components/admin/MenuLink'
import { NavLink, Outlet } from 'react-router-dom'

import profilePlaceholder from "../assets/admindashboard/profile-placeholder.svg"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function AdminLayout() {

    const { user, loading } = useContext(AuthContext)

    return (
        <div className="h-screen w-screen bg-[#F9F9F9] flex text-adminTextColor font-rubik">
            <div className=" h-full bg-adminSideBarColor p-4 px-8 border flex flex-col min-w-fit">
                <div className="py-6">
                    <Logo width="w-[55px]" text="text-[22px] font-light"/>
                </div>
                <nav className="py-12 font-light">
                    <h2 className="text-[19px]">Menu</h2>
                    <ul className="py-6 px-2 flex flex-col gap-8">
                        <li className="w-full flex">
                            <MenuLink 
                                faIcon={faSquarePollVertical} 
                                text="Apercu"
                                url=""
                            />
                        </li>
                        <li className="w-full flex">
                            <MenuLink 
                                faIcon={faUsers} 
                                text="Membres" 
                                url='/membres'
                            />
                        </li>
                        <li className="w-full flex">
                            <MenuLink
                                faIcon={faComments}
                                text="Messages"
                                url='/messages'
                            />
                        </li>
                        <li className="w-full flex">
                            <MenuLink
                                faIcon={faCalendarDays}
                                text="Réservations"
                                url='/reservations'
                            />
                        </li>
                        <li className="w-full flex">
                            <MenuLink
                                faIcon={faTicketSimple}
                                text="Billets"
                                url='/billets'
                            />
                        </li>
                        <li className="w-full flex">
                            <MenuLink
                                faIcon={faTags}
                                text="Catégories"
                                url='/categories'
                            />
                        </li>
                        <li className="w-full flex">
                            <MenuLink
                                faIcon={faFontAwesome}
                                text="Attractions"
                                url='/attractions'
                            />
                        </li>
                    </ul>
                </nav>
                <div className='flex-grow font-light flex items-end'>
                    <NavLink to="/" className="flex gap-4 items-center">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-primaryColor"/>
                        Revenir au site
                    </NavLink>
                </div>
            </div>
            <div className="flex-grow flex flex-col">
                <header className="p-8 w-full bg-adminSideBarColor border-b flex justify-between items-center">
                    <h1 className='text-[19px] border-l-8 border-primaryColor pl-2 rounded'>Panel de gestion</h1>
                    <div className='flex gap-4'>
                        <img src={profilePlaceholder} alt=" " className='h-[52px]'/>
                        <div>
                            <p>{user.first_name} {user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </header>
                <main className="p-8 flex-grow">
                    <Outlet />
                </main>
            </div>
        </div>
    )

}

export default AdminLayout