
import Container from "./Container"
import img1 from "../assets/homepage/image-1.png"
import img2 from "../assets/homepage/image.png"
import img3 from "../assets/homepage/image3.png"
import { useState } from "react"
import RedShadow from "./ui/RedShadow"

function InteractiveHomeMenu() {

    const [textIndex, setTextIndex] = useState(0)

    const texts = [
        "Découvrez un monde palpitant où chaque attraction vous plonge dans une aventure unique. Que vous cherchiez des sensations fortes ou des expériences immersives, notre parc offre une gamme d'activités qui éveilleront votre esprit d'aventure et raviront vos sens.",
        "Nous nous engageons à garantir votre sécurité et confort tout au long de votre visite. Nos installations modernes et notre personnel formé assurent un environnement sécurisé et agréable, vous permettant de profiter pleinement de chaque moment sans souci.",
        "Participez à nos événements spéciaux tout au long de l'année, conçus pour offrir des expériences inoubliables. Que ce soit pour une fête, une célébration ou une soirée thématique, nous avons tout prévu pour rendre chaque événement exceptionnel et mémorable."
    ]

    const images = [
        <img key={0} src={img1} className="rounded  min-h-[270px] lg:max-w-[188px]"/>,
        <img key={1} src={img2} className="rounded  min-h-[270px] lg:max-w-[188px]"/>,
        <img key={2} src={img3} className="rounded  min-h-[270px] lg:max-w-[188px]"/>,
    ]

    const handleClick = (index, e) => {
        e.preventDefault()
        setTextIndex(index)
    }

    return (
        <Container className="py-32 flex flex-col items-center gap-16 md:flex-row md:py-52 relative">
                <div className="md:w-1/2 flex flex-col gap-8 order-1">
                    <h2 className="text-heading2-mobile md:text-heading2-desktop">
                        Prêts à tenter l&apos;<span className="text-primaryColor">aventure ?</span>
                    </h2>
                    <p>
                        {texts[textIndex]}
                    </p>
                </div>
                <div className="md:w-1/2 md:order-2">
                    <div className=" bg-secondaryBackgroundColor border-borderColor border-2 rounded p-6 flex flex-col w-full gap-4 lg:flex-row">
                        {images[textIndex]}
                        <div className="flex flex-col">
                            <a href="" 
                                className={`p-2 rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-primaryColor ${textIndex === 0 ? "bg-primaryColor" : ""}`}
                                onClick={(e) => handleClick(0, e)}>
                                <span>Aventure et Attractions</span>
                                <p className="font-thin">
                                Sensation fortes et aventures captivantes vous attendent.
                                </p>
                            </a>
                            <a href="" 
                            className={`p-2 rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-primaryColor ${textIndex === 1 ? "bg-primaryColor" : ""} `} 
                            onClick={(e) => handleClick(1, e)}>
                                <span>Sécurité et Confort</span>
                                <p className="font-thin">
                                Sécurité optimale et confort inégalé pour votre tranquillité.
                                </p>
                            </a>
                            <a href="" 
                            className={`p-2 rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-primaryColor ${textIndex === 2 ? "bg-primaryColor" : ""}`} 
                            onClick={(e) => handleClick(2, e)}>
                                <span>Événements Spéciaux</span>
                                <p className="font-thin">
                                Événements uniques pour des moments mémorables et festifs.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <RedShadow className="-bottom-32 -left-44"/>
            </Container>
    )

}

export default InteractiveHomeMenu