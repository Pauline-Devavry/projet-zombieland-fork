import Logo from "../components/Logo"


function AdminLayout() {

    return (
        <div className="h-screen w-screen bg-[#F9F9F9] flex">
            <div className="w-[15%] h-full bg-red-300">
                <Logo width="w-[55px]" text="text-[22px]"/>
                <nav>
                    <span>Menu</span>
                    <ul>
                        <li>Apercu</li>
                        <li>Messages</li>
                        <li>Réservation</li>
                        <li>Billets</li>
                    </ul>
                </nav>
            </div>
            <div className="flex-grow bg-blue-300">
                <header className="p-8 w-full bg-purple-300">
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