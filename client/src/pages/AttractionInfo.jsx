import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import RedShadow from "../components/ui/RedShadow";

function AttractionInfo() {
  const [attractionsInfo, setAttractionsInfo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/attractions/${id}`
      );
      setAttractionsInfo(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container className="bg-backgroundColor min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_kJvhvYKsQqlcLEVfLxcTLSGYFEhOhPjerGdIwEDIIXwv3bKRSuxDVSre-WyqA5qUbVWcT8TVVHlHvsQ5tHp3k2aglTtcRUu28r8XAbyef8vpMrLsJ9eSsLGfxODNF_25Tz1GVfvDggI/s1600/Halloween+2013-+Walibi.jpg"
              alt={attractionsInfo.name}
              className="w-full h-64 md:h-96 object-cover rounded-lg border-[2px] border-[#72232D]"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center relative">
            <div className="relative z-10">
              <RedShadow className="absolute -top-4 -right-4 left-4 bottom-4" />
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-20">
                {attractionsInfo.name}
              </h1>
              {/* Description en dessous */}
              <div className="relative z-20">
                <p className="text-white text-lg mb-4">
                  {attractionsInfo.description}
                </p>
                <p className="text-white text-lg">
                  {" "}
                  {attractionsInfo.Category && (
                    <span className="inline-block bg-slate-500 text-white text-sm px-2 py-0.5 rounded-full">
                      {attractionsInfo.Category.name}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white text-xl md:text-3xl font-semibold pt-[16rem]">
            Pour votre sécurité, veuillez respecter les consignes de sécurité.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default AttractionInfo;
