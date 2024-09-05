import { 
    faSquarePollVertical, 
    faUsers, 
    faComments, 
    faCalendarDays, 
    faTicketSimple, 
    faTags,faFontAwesome 
} from '@fortawesome/free-solid-svg-icons'
import Logo from "../components/Logo"

import MenuLink from '../pages/admin/MenuLink'

function AdminLayout() {

    return (
        <div className="h-screen w-screen bg-[#F9F9F9] flex text-adminTextColor">
            <div className=" h-full bg-adminSideBarColor p-4 px-8 border">
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
            </div>
            <div className="flex-grow">
                <header className="p-8 w-full bg-adminSideBarColor border-b">
                    <span>Panel de gestion</span>
                    <span>Dave Lopper</span>
                </header>
                <main>
                    Contenu du panel
                </main>
            </div>
        </div>
    )

}

export default AdminLayout