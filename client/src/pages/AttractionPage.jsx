
import axios from "axios"
import { useEffect, useState } from "react";
import Container from "../components/Container";
import AttractionCard from "../components/AttractionCard";

function AttractionPage() {

  const [attractions, setAttractions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // await axios.get("http://localhost:3000/attractions").then(data => setAttractions(data))
      const response = await axios.get("http://localhost:3000/attractions")
      setAttractions(response.data)
    }
    fetchData()
  },[])


   return (
    <div className="bg-backgroundColor">
      
        <header className="text-center p-8">
            <h1 className="text-2xl font-bold  text-white">
                En quête de frissons et de terreur ? Découvrez des attractions toutes aussi <span className="text-red-500">terrifiantes</span> les unes que les autres...
            </h1>
        </header>
      <img src="" alt="image zombie " className="w-full rounded-lg mb-4" />
      <div className="flex justify-center">
            <img src="" alt="" className="" />
      </div>
      <section className="mt-12">
            <h2 className="text-center text-3xl font-bold mb-8  text-white">Nos attractions</h2>
            <div className="flex justify-center mb-6">
                <button className="bg-red-600 text-white py-2 px-4 rounded">
                    Categories
                </button>
            </div>

            <Container className="grid grid-cols-4 gap-4">
                {
                    attractions.map((attraction) => {
                        return (
                            <AttractionCard 
                                key={attraction.id}
                                name={attraction.name}
                                description={attraction.description}
                            />
                        )
                    })
                }
            </Container>

      </section>
    </div>
  );
}


export default AttractionPage;

