import ZombieLandLogo from "../assets/logos/zombieland-logo.svg"
import burgerMenu from "../assets/icons/burger-icon.svg"
import { NavLink } from "react-router-dom";
import closeBurger from "../assets/icons/close-burger.svg"
import { useState } from "react";

function Header() {

    const [showMenu, setShowMenu] = useState(false)

    const handleBurgerMenu = (e) => {
        e.preventDefault()
        setShowMenu(prev => !prev)
    }

    return (
        <header className="w-screen relative">
            <div className={`bg-backgroundColor w-screen p-6 absolute  shadow-xl border-b transform transition-transform duration-300 ease-in-out ${!showMenu ? "-translate-y-full" : "translate-y-0"}`}>
                <nav>
                    <ul className="flex flex-col items-center w-full gap-2">
                        <li><NavLink to={'/'} className={(nav) => nav.isActive && "text-primaryColor"}>Accueil</NavLink></li>
                        <li><NavLink to={'/attractions'} className={(nav) => nav.isActive && "text-primaryColor"}>Attractions</NavLink></li>
                        <li><NavLink to={'/reserver'} className={(nav) => nav.isActive && "text-primaryColor"}>Reserver</NavLink></li>
                        <li><NavLink to={'/faq'} className={(nav) => nav.isActive && "text-primaryColor"}>Faq</NavLink></li>
                        <li><NavLink to={'/contact'} className={(nav) => nav.isActive && "text-primaryColor"}>Contacter-nous</NavLink></li>
                        <li><NavLink to={'/a-propos'} className={(nav) => nav.isActive && "text-primaryColor"}>A propos</NavLink></li>
                        <li><NavLink to={'/connexion'} className={(nav) => nav.isActive && "text-primaryColor"}>Se connecter</NavLink></li>
                    </ul>
                    <a href="" className="absolute top-4 right-4" onClick={handleBurgerMenu}>
                        <img src={closeBurger} className="h-6" alt="Bouton pour fermer le menu de navigation" />
                    </a>
                </nav>
            </div>
            <div className="max-w-[75rem] mx-auto py-11 flex justify-between items-center font-rubik text-white sm:px-8 lg:px-12 px-6">
                <div className="flex items-center gap-4">
                    <img className="w-8" src={ZombieLandLogo} alt="Logo de Zombieland"/>
                    <span className="text-[19px]">Zombieland</span>
                </div>
                <nav>
                    <ul className="hidden md:flex gap-4 font-extralight">
                        <li><NavLink to={'/'} className={(nav) => nav.isActive && "text-primaryColor"}>Accueil</NavLink></li>
                        <li><NavLink to={'/attractions'} className={(nav) => nav.isActive && "text-primaryColor"}>Attractions</NavLink></li>
                        <li><NavLink to={'/reserver'} className={(nav) => nav.isActive && "text-primaryColor"}>Reserver</NavLink></li>
                        <li><NavLink to={'/faq'} className={(nav) => nav.isActive && "text-primaryColor"}>Faq</NavLink></li>
                        <li><NavLink to={'/contact'} className={(nav) => nav.isActive && "text-primaryColor"}>Contacter-nous</NavLink></li>
                        <li><NavLink to={'/a-propos'} className={(nav) => nav.isActive && "text-primaryColor"}>A propos</NavLink></li>
                        <li><NavLink to={'/connexion'} className={(nav) => nav.isActive && "text-primaryColor"}>Se connecter</NavLink></li>
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
