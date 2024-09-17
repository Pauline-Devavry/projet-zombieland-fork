import { NavLink, Outlet } from 'react-router-dom';

function UserLayout() {
    return (
        <div className="flex flex-col md:flex-row bg-backgroundColor text-white">
        
            <div className="w-full md:w-64 p-4 border border-white">
                <div className="flex items-center justify-between md:block">
                    <h2>Espace personnel</h2>
                </div>

                    <nav className="mt-8">
                        <ul>
                        <li>
                    <NavLink
                        to="/profil"
                        className={({ isActive }) =>
                        isActive ? "text-primaryColor" : "text-white"}
                        end={true}
                    >
                    Mon profil
                    </NavLink>
                        </li>
                        <li className="mt-4">
                    <NavLink
                        to="/profil/reservations"
                        className={({ isActive }) =>
                        isActive ? "text-primaryColor" : "text-white"}
                    >
                    Mes réservations
                    </NavLink>
                        </li>
                        </ul>
                    </nav>
            </div>

            <main className="flex-grow p-6 bg-backgroundColor w-full md:w-64 border border-white">
                    <Outlet />
            </main>
        </div>
  );
}

export default UserLayout;