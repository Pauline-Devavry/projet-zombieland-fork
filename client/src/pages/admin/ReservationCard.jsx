import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


function ReservationCard({data}) {
    
    return (
        <Link to={`/admin/reservations/${data.id}`} className="bg-adminCardColor min-h-[150px] p-4 rounded-sm border-r-2 border-primaryColor font-thin flex flex-col justify-between">
            <span>
                Numéro: {data.id}
            </span>
            <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-primaryColor"/>
                    <span>{data.date_visit}</span>
                </div>
                <div className="flex flex-col">
                    <span>{data.User.first_name} {data.User.name}</span>
                    <span>{data.User.email}</span>
                </div>
            </div>
        </Link>
    )
    
}

export default ReservationCard