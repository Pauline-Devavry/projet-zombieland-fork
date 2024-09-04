import zombieImg from "../assets/homepage/zombie.svg"
import zombielandCurved from "../assets/homepage/zombieland-curved.svg"
import arrowDown from "../assets/homepage/arrow-down.svg"
import Container from "../components/Container"
import RedShadow from "../components/ui/RedShadow.jsx"
import waveImg from "../assets/homepage/wave.svg"

import img1 from "../assets/homepage/image-1.png"
import img2 from "../assets/homepage/image.png"
import img3 from "../assets/homepage/image3.png"

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

            {/* Wave section */}

            <div className="flex flex-col gap-0">
                <img src={waveImg} alt="" className="w-full -mb-1" />
                <div className="bg-gradient-to-b from-gradiantDarkRed to-primaryColor flex flex-col items-center gap-20 overflow-hidden py-24">
                    <h2 className="text-heading1-mobile text-center">
                        De nombreuses attractions à découvrir
                    </h2>
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <div className="flex flex-col space-y-4 md:w-1/2">
                                <div className="bg-secondaryBackgroundColor h-48 rounded-lg flex p-4">
                                    <img src={img1} alt="" className="w-full"/>
                                </div>
                                <div className="bg-secondaryBackgroundColor h-48 rounded-lg flex p-4">
                                    <img src={img2} alt="" className="w-full"/>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 md:w-1/2">
                                <div className="bg-secondaryBackgroundColor h-48 rounded-lg flex p-4">
                                    <img src={img3} alt="" className="w-full"/>
                                </div>
                                <div className="bg-secondaryBackgroundColor h-48 rounded-lg flex p-4">
                                    <img src={img1} alt="" className="w-full"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </main>
    )

    

}

export default HomePage





