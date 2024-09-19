import { Link } from "react-router-dom"
import Pagination from "../../components/admin/Pagination"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { api } from "../../api/axiosConfig"
import AttractionCard from "../../components/admin/AttractionCard.jsx"



function AttractionsPage() {

    const [attractions, setAttractions] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/attractions?page=1")
                setAttractions(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    })
    

    return (
        <div className="h-full flex flex-col">
            <Link className="text-primaryColor w-fit">
                Ajouter une attraction
            </Link>
            <div className="grid grid-cols-5 gap-y-8 h-full  py-8">
                

                {
                    loading ? (
                        <h1>Chargement des attractions...</h1>
                    ) : (
                        attractions.map(attraction => 
                            <AttractionCard key={attraction.id} data={attraction}
                        />)
                    )
                }
                
                
            </div>
            <Pagination/>
        </div>
    )

}

export default AttractionsPage