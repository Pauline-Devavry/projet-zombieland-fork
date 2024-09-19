import zombieImg from "../assets/homepage/zombie.svg";
import zombielandCurved from "../assets/homepage/zombieland-curved.svg";
import arrowDown from "../assets/homepage/arrow-down.svg";
import Container from "../components/Container";
import RedShadow from "../components/ui/RedShadow.jsx";
import waveImg from "../assets/homepage/wave.svg";

import img1 from "../assets/homepage/image-1.png";
import img2 from "../assets/homepage/image.png";
import img3 from "../assets/homepage/image3.png";
import planImg from "../assets/homepage/parc-plan-provisory.png";

import rollerCosterIcon from "../assets/homepage/roller-coster-icon.svg";
import ticketIcon from "../assets/homepage/ticket-icon.svg";
import hourglassIcon from "../assets/homepage/hourglass-icon.svg";

import { Link } from "react-router-dom";
import InteractiveHomeMenu from "../components/InteractiveHomeMenu.jsx";

import { useState, useEffect } from "react";
import { api } from "../api/axiosConfig.js";
import AttractionImage from "../components/AttractionImage.jsx";
import Marquee from "react-fast-marquee";

function HomePage() {
    const [attractions, setAttractions] = useState([]);
    const [marqueeLoading, setMarqueeLoading] = useState(true)
    const [isPaused, setIsPaused] = useState(false);

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: {attractions}} = await api.get("/attractions?");
                setAttractions(attractions);
                setMarqueeLoading(false)
            } catch (error) {
                console.error("Erreur lors de la récupération des attractions:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="font-rubik min-h-screen pt-16 pb-16 relative">
            {/* Hero section */}
            <Container className="flex flex-col justify-center items-center gap-12 md:gap-0">
                <div className="flex flex-col md:flex-row items-center gap-32">
                    <div className="flex flex-col gap-6 md:w-1/2">
                        <h1 className="text-[2rem] font-medium uppercase text-heading1-mobile md:text-heading1-desktop">
                            Redécouvrez le concept d&apos;
                            <strong className="font-medium">attraction</strong>{" "}
                            <span className="text-primaryColor">d&apos;horreur !</span>
                        </h1>
                        <div className="max-w-[32.75rem] flex flex-col gap-4">
                            <p>
                                Explorez des attractions d&apos;horreur fascinantes et plongez
                                dans des expériences inoubliables qui éveilleront vos sens et
                                feront battre votre cœur plus vite.
                            </p>
                            <Link
                                to={"/reserver"}
                                className="bg-primaryColor rounded-sm px-4 py-2 w-fit"
                            >
                                Faire une réservation
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center relative md:w-1/2">
                        <img
                            src={zombielandCurved}
                            alt="Zombieland"
                            className="max-h-[58px] md:max-h-[5.5rem]"
                        />
                        <img
                            src={zombieImg}
                            alt="Image d'un zombie"
                            className="max-h-[326px] md:max-h-[35rem]"
                        />
                        <RedShadow className="right-8" />
                    </div>
                </div>
                <img src={arrowDown} alt="" className="animate-bounce" />
            </Container>

            {/* Wave section */}
            <div className="flex flex-col gap-0">
              <img src={waveImg} alt="" className="w-full -mb-1" />
              <div className="bg-gradient-to-b from-gradiantDarkRed to-primaryColor flex flex-col items-center gap-20 overflow-hidden py-24">
                <h2 className="text-heading2-mobile text-center md:text-heading2-desktop">
                  De nombreuses attractions à découvrir
                </h2>
                <div className="w-full">
                  {
                    marqueeLoading ? (
                      <h1>Chargement des images...</h1>
                    ) : (
                      <>

                        <div className="mx-auto py-4" onClick={togglePause}>
                          <Marquee direction="left" speed={70} pauseOnHover={true} pauseOnClick={true} play={!isPaused} gradient={false}>
                            {attractions.slice(0, 13).map((attraction) => (
                              <div key={attraction.id} className="mx-4">
                                <AttractionImage
                                  // image_url={attraction.image_url}
                                />
                              </div>
                            ))}
                            {/* Répétition pour un défilement continu */}
                            {attractions.slice(0, 13).map((attraction) => (
                              <div key={`repeat-${attraction.id}`} className="mx-4">
                                <AttractionImage
                                  // image_url={attraction.image_url}
                                />
                              </div>
                            ))}
                          </Marquee>
                        </div>
                        <div className="mx-auto py-4" onClick={togglePause}>
                          <Marquee direction="right" speed={70} pauseOnHover={true} pauseOnClick={true} play={!isPaused} gradient={false}>
                            {attractions.slice(13).map((attraction) => (
                              <div key={attraction.id} className="mx-4">
                                <AttractionImage
                                  // image_url={attraction.image_url}
                                />
                              </div>
                            ))}
                            {/* Répétition pour un défilement continu */}
                            {attractions.slice(13).map((attraction) => (
                              <div key={`repeat-${attraction.id}`} className="mx-4">
                                <AttractionImage
                                  // image_url={attraction.image_url}
                                />
                              </div>
                            ))}
                          </Marquee>
                          <Marquee direction="right" speed={70} pauseOnHover={true} pauseOnClick={true} play={!isPaused} gradient={false}>
                            {attractions.slice(0, 13).map((attraction) => (
                              <div key={attraction.id} className="mx-4">
                                <AttractionImage
                                  // image_url={attraction.image_url}
                                />
                              </div>
                            ))}
                            {/* Répétition pour un défilement continu */}
                            {attractions.slice(0, 13).map((attraction) => (
                              <div key={`repeat-${attraction.id}`} className="mx-4">
                                <AttractionImage
                                  // image_url={attraction.image_url}
                                />
                              </div>
                            ))}
                          </Marquee>
                        </div>

                      </>
                    )
                  }
                </div>
              </div>
            </div>

            {/* Interactive menu seperated in its own component*/}

            <InteractiveHomeMenu />

            {/* Horizontal bar section */}

            <div className="bg-secondaryBackgroundColor w-full py-10 border-b border-t border-borderColor flex flex-col gap-28 md:justify-around md:gap-0 md:flex-row">
                <div className="flex flex-col items-center gap-4">
                    <img src={rollerCosterIcon} alt="Illustration d'une montagne russe" />
                    <h4>
                        + <span className="text-primaryColor">30</span> Attractions
                    </h4>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src={ticketIcon} alt="Illustration d'une montagne russe" />
                    <h4>
                        + <span className="text-primaryColor">324,520</span> Billets vendu
                    </h4>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img src={hourglassIcon} alt="Illustration d'une montagne russe" />
                    <h4>
                        + <span className="text-primaryColor">25</span> ans d&apos;existance
                    </h4>
                </div>
            </div>

            <Container className="pt-52 pb-20 flex justify-center flex-col items-center gap-12">
                <h1 className="text-heading1-mobile md:text-heading1-desktop font-light">
                    Carte du parc
                </h1>
                <img
                    src={planImg}
                    className="max-h-[824px]"
                    alt="Dessin du plan du parc d'attraction Zombieland"
                />
            </Container>
        </main>
    );
}

export default HomePage;
