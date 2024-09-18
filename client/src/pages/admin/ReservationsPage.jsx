import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import ReservationCard from "./ReservationCard"
import Pagination from "../../components/admin/Pagination"
import { useEffect, useState } from "react"
import { api } from "../../api/axiosConfig"
import CardTotal from "../../components/admin/CardTotal"


function ReservationsPage() {

    const [currentPage, setCurrentPage] = useState(1)
    const [reservations, setReservations] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [totalReservations, setTotalReservations] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const { data: {reservations, totalPages} } = await api.get(`/reservations?page=${currentPage}&limit=12`)
            const { data: {total} } = await api.get("/reservations/total")
            setTotalReservations(total)
            setReservations(reservations)
            setTotalPages(totalPages)
        }
        fetchData()
    }, [currentPage])

    const handlePagination = (page) => {
        if(page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    return (
        <div className="flex flex-col gap-6">
        
            <form className="flex">
                <div className="flex gap-4">
                    <input type="text" name="reservation_id" id="" placeholder="Numéro de réservation" className="border border-adminBorderColor p-1 rounded-sm"/>
                    <button className="border border-adminBorderColor p-1 rounded-sm px-2 ">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-primaryColor"/>
                    </button>
                </div>
            </form>

            <div className="flex">

                <div className="">
                    <div className="grid grid-cols-3 gap-4 max-w-[972px]">
                        {
                            reservations.map((reservation) => {
                                return (
                                    <ReservationCard data={reservation} key={reservation.id}/>
                                )
                            })
                        }
                            
                    </div>
                    <Pagination onPageChange={handlePagination} currentPage={currentPage}/>
                </div>

                <div className="flex-grow ">
                        <CardTotal className={'w-full h-[200px]'} modelName={"réservations"} total={totalReservations}/>
                </div>
            </div>
        
        </div>
    )

}

export default ReservationsPage