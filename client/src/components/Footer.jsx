import { NavLink } from "react-router-dom"
import zombielandLogo from "../assets/logos/zombieland-logo.svg"

function Footer() {

    return (
        <footer className="w-full bg-secondaryBackgroundColor">
            <div className="px-12 py-8 flex flex-col gap-9 md:flex-row max-w-[75rem] m-auto font-rubik text-white md:px-6 md:justify-between">
                <div className="flex flex-col gap-4">
                    <NavLink to={"/"} className={"flex gap-4 items-center"}>
                        <img src={zombielandLogo} className="w-8" alt="" />
                        <span className="font-medium">Zombieland</span>
                    </NavLink>
                    <p className="font-thin max-w-[198px] text-xs">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                    </p>
                </div>
                <nav className="flex flex-col gap-4">
                    <h4 className="font-medium">Navigation</h4>
                    <ul className="font-extralight flex flex-col text-xs gap-1">
                        <li>
                            <NavLink to="/">Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/attractions">Attractions</NavLink>
                        </li>
                        <li>
                            <NavLink to="/reserver">Reserver</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq">Faq</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contacter-nous</NavLink>
                        </li>
                        <li>
                            <NavLink to="/a-propos">A propos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/connexion">Se connecter</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col gap-4">
                    <h4 className="font-medium">Coordonnées</h4>
                    <div className="text-xs font-extralight">
                        <p>65 place Stanislas</p>
                        <p>91300 Nancy</p>
                        <p>zombieland@parc.fr</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-4">
                    <h4 className="font-medium">Légal</h4>
                    <ul className="font-extralight flex flex-col text-xs gap-1">
                        <li>
                            <NavLink to={"mentions-legals"}>
                                Mentions legal
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"mentions-legals"}>
                                Terms
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"mentions-legals"}>
                                Conditions d&apos;utilisations
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <nav className="flex flex-col gap-4">
                    <h4 className="font-medium">Membre</h4>
                    <ul className="font-extralight flex flex-col text-xs gap-1">
                        <li>
                            <NavLink to={"/connexion"}>
                                Se connecter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/register"}>
                                Créer un compte
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )

}

export default Footer