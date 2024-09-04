
import Container from "./Container"
import img1 from "../assets/homepage/image-1.png"
import img2 from "../assets/homepage/image.png"
import img3 from "../assets/homepage/image3.png"
import { useState } from "react"
import RedShadow from "./ui/RedShadow"

function InteractiveHomeMenu() {

    const [textIndex, setTextIndex] = useState(0)

    const texts = [
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Neque massa lacinia sem libero nisl. Maecenas odio platea euismod porta odio suspendisse parturient ut. Massa cursus sodales, duis congue primis elit. Ultricies blandit semper, litora auctor erat non congue imperdiet. Senectus netus urna porta cursus egestas volutpat lacus.",
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Elit morbi efficitur maximus ipsum lacinia a scelerisque. Ridiculus eleifend class egestas per tempus varius lacinia vulputate lectus. Pulvinar posuere fusce ipsum libero quis primis lacinia. Fames viverra curabitur penatibus eget lobortis quis. Per nostra gravida dapibus, ultricies congue"
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
                        Lorem <span className="text-primaryColor">ipsum</span> dolor text
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
                                    Re-usable components built using Radix UI and Tailwind CSS
                                </p>
                            </a>
                            <a href="" 
                            className={`p-2 rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-primaryColor ${textIndex === 1 ? "bg-primaryColor" : ""} `} 
                            onClick={(e) => handleClick(1, e)}>
                                <span>Sécurité et Confort</span>
                                <p className="font-thin">
                                    How to install dependencies and structure your app.
                                </p>
                            </a>
                            <a href="" 
                            className={`p-2 rounded cursor-pointer transition-colors duration-300 ease-in-out hover:bg-primaryColor ${textIndex === 2 ? "bg-primaryColor" : ""}`} 
                            onClick={(e) => handleClick(2, e)}>
                                <span>Événements Spéciaux</span>
                                <p className="font-thin">
                                    Styles for headings, paragraphs, lists...etc
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