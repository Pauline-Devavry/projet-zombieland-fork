import zombieImg from "../assets/homepage/zombie.svg"
import zombielandCurved from "../assets/homepage/zombieland-curved.svg"
import arrowDown from "../assets/homepage/arrow-down.svg"
import Container from "../components/Container"
import RedShadow from "../components/ui/RedShadow.jsx"
import { Link } from "react-router-dom"

function HomePage() {

    return (
        <main className="font-rubik min-h-screen pt-16 pb-16 relative">

            {/* Hero section */}
            
            <Container className="flex flex-col justify-center items-center gap-12 md:gap-0">
                <div className="flex flex-col md:flex-row items-center gap-32">
                    <div className="flex flex-col gap-6 md:w-1/2">
                        <h1 className="text-[2rem] font-medium uppercase text-heading1-mobile md:text-heading1-desktop">
                            Redécouvrez le concept d&apos;<strong className="font-medium">attraction</strong> <span className="text-primaryColor">d&apos;horreur !</span>
                        </h1>
                        <div className="max-w-[32.75rem] flex flex-col gap-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                            <Link to={"/"} className={"bg-primaryColor rounded-sm px-4 py-2 w-fit"}>
                                Faire une réservation
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center relative md:w-1/2">
                        <img src={zombielandCurved} alt="Zombieland" className="max-h-[58px] md:max-h-[5.5rem]"/>
                        <img src={zombieImg} alt="Image d'un zombie" className="max-h-[326px] md:max-h-[35rem]"/>
                        <RedShadow className='right-8'/>
                    </div>
                </div>

                <img src={arrowDown} alt="" className="animate-bounce" />
            </Container>
            
        </main>
    )

    

}

export default HomePage





