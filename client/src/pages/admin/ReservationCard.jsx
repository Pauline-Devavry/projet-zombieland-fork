import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function ReservationCard({data}) {
    
    return (
        <div className="bg-adminCardColor min-h-[150px] p-4 rounded-sm border-r-2 border-primaryColor font-thin flex flex-col justify-between">
            <span>
                Numéro: 1932
            </span>
            <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-primaryColor"/>
                    <span>22/06/2025</span>
                </div>
                <div className="flex flex-col">
                    <span>Elon Musk</span>
                    <span>elon@musk.com</span>
                </div>
            </div>
        </div>
    )
    
}

export default ReservationCard