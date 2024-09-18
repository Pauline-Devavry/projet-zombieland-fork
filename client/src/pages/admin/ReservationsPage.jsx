import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import ReservationCard from "./ReservationCard"


function ReservationsPage() {

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

            <div>

                <div className="grid grid-cols-3 gap-4 max-w-[972px]">
                    {
                        Array(10).fill().map((_, index) => {
                            return (
                                <ReservationCard key={index}/> 
                            )
                        })
                    }       
                </div>

                <div>

                </div>
            </div>
        
        </div>
    )

}

export default ReservationsPage