import ZombieLandLogo from "../assets/logos/zombieland-logo.svg"
import burgerMenu from "../assets/icons/burger-icon.svg"
import { NavLink } from "react-router-dom";
import closeBurger from "../assets/icons/close-burger.svg"
import { useContext, useState } from "react";
import Logo from "./Logo";
import { AuthContext } from "../context/AuthContext";

function Header() {

    const [showMenu, setShowMenu] = useState(false)

    const { user } = useContext(AuthContext)

    const handleBurgerMenu = (e) => {
        e.preventDefault()
        setShowMenu(prev => !prev)
    }

    return (
        <header className="w-full relative">
            <div className={`bg-backgroundColor w-full fixed p-6 z-50   shadow-xl border-b transform transition-transform duration-300 ease-in-out ${!showMenu ? "-translate-y-full" : "translate-y-0"}`}>
                <nav>
                    <ul className="flex flex-col items-center w-full gap-2">
                        <li><NavLink to={'/'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Accueil</NavLink></li>
                        <li><NavLink to={'/attractions'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Attractions</NavLink></li>
                        <li><NavLink to={'/reserver'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Reserver</NavLink></li>
                        <li><NavLink to={'/faq'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Faq</NavLink></li>
                        <li><NavLink to={'/contact'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Contacter-nous</NavLink></li>
                        <li><NavLink to={'/a-propos'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>A propos</NavLink></li>
                        {
                            !user ? (
                                <li><NavLink to={'/connexion'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Se connecter</NavLink></li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to={'/profil'}
                                                 className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Profil
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/deconnexion'}
                                                 className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Se
                                            déconnecter
                                        </NavLink>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                    <a href="" className="absolute top-4 right-4" onClick={handleBurgerMenu}>
                        <img src={closeBurger} className="h-6" alt="Bouton pour fermer le menu de navigation" />
                    </a>
                </nav>
            </div>
            <div className="max-w-[75rem] mx-auto py-11 flex justify-between items-center font-rubik text-white px-6">
                <Logo/>
                <nav>
                    <ul className="hidden md:flex gap-4 font-extralight">
                        <li><NavLink to={'/'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Accueil</NavLink></li>
                        <li><NavLink to={'/attractions'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Attractions</NavLink></li>
                        <li><NavLink to={'/reserver'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Reserver</NavLink></li>
                        <li><NavLink to={'/faq'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Faq</NavLink></li>
                        <li><NavLink to={'/contact'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Contacter-nous</NavLink></li>
                        <li><NavLink to={'/a-propos'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>A propos</NavLink></li>
                        {
                            !user ? (
                                <li><NavLink to={'/connexion'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Se connecter</NavLink></li>
                            ) : (
                                <>
                                    <li><NavLink to={'/profil'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Profil</NavLink></li>
                                    <li><NavLink to={'/deconnexion'} className={(nav) => nav.isActive ? "text-primaryColor" : undefined}>Se déconnecter</NavLink></li>
                                </>
                                
                            )
                        }
                    </ul>
                    <a href="" onClick={handleBurgerMenu}>
                        <img src={burgerMenu} className="w-6 md:hidden" alt="Bouton pour ouvrir le menu de navigation." />
                    </a>
                </nav>
            </div>
        </header>
    );

}


export default Header
