import { Link } from "react-router-dom"
import Pagination from "../../components/admin/Pagination"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { api } from "../../api/axiosConfig"
import AttractionCard from "../../components/admin/AttractionCard.jsx"



function AttractionsPage() {

    const [attractions, setAttractions] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: {attractions, totalPages} } = await api.get(`/attractions?page=${currentPage}`)
                setAttractions(attractions)
                setTotalPages(totalPages)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[currentPage])

    const handlePagination = (page) => {
        if(page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }
    

    return (
        <div className="h-full flex flex-col">
            <Link to={"/admin/attractions/ajouter"} className="text-primaryColor w-fit">
                Ajouter une attraction
            </Link>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 h-full  py-8">
                

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
            <Pagination currentPage={currentPage} onPageChange={handlePagination}/>
        </div>
    )

}

export default AttractionsPage