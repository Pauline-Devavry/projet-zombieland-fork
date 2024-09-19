import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTicketSimple, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/axiosConfig";
import { toast } from "react-toastify";

function ReservationDetails() {

    const { id } = useParams()

    const [reservation, setReservation] = useState({})
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        status: "",
        visitDate: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/reservations/${id}`)
                setReservation(response.data)
                setFormData(prev => ({...prev, visitDate: response.data.date_visit}))
                setFormData(prev => ({...prev, status: response.data.status}))
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.patch(`/reservations/${id}`, {
                status: formData.status,
                date_visit: formData.visitDate
            })
            toast("Réservation mise à jour !", {type: "success", theme: "light"})
        } catch {
            toast("Erreur lors de la mise à jour", {type: "error", theme: "light"})
        }
    }

    return (
        <main className="h-full flex flex-col">
            <div>
                <Link to={"/admin/reservations"} className="text-lg flex gap-4 items-center w-fit">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-primaryColor"/>
                    Retour
                </Link>
            </div>
            <div className="flex-grow flex items-center justify-center">
                {
                    loading ? (
                        <h1>Chargement en cours...</h1>
                    ) : (
                        <div className="bg-adminCardColor w-[450px] p-4 flex flex-col gap-10 rounded border-r-2 border-primaryColor font-thin justify-between">
                            <div className="flex justify-between">
                                <span>
                                    Numéro : {reservation.id}
                                </span>
                                <div className="flex flex-col">
                                    <span>{reservation.User.first_name} {reservation.User.name}</span>
                                    <span>{reservation.User.email}</span>
                                </div>
                            </div>
                            <form className="flex justify-between items-end" onSubmit={handleFormSubmit}>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <span>Nombre de billets</span>
                                        <div className="flex gap-4 items-center">
                                            <div className="flex gap-4 items-center">
                                                <FontAwesomeIcon icon={faTicketSimple} className="text-primaryColor"/>
                                                <span>{reservation.totalTickets}</span>
                                            </div>
                                            <span>{reservation.total_price} €</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Etat de la réservation</span>
                                        <div className="flex gap-4 items-center">
                                            <FontAwesomeIcon icon={faTicketSimple} className="text-primaryColor"/>
                                            <select name="status" id="" value={`${formData.status}`} onChange={handleFormChange}>
                                                <option value="annulée">Annulée</option>
                                                <option value="confirmée">Confirmée</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span>Date de visite</span>
                                        <div className="flex gap-4 items-center">
                                            <FontAwesomeIcon icon={faCalendarDays} className="text-primaryColor"/>
                                            <input type="date" name="visitDate" value={`${formData.visitDate}`} onChange={handleFormChange}/>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-primaryColor text-white py-2 px-4 rounded-sm">
                                    Enregister
                                </button>
                            </form>
                        </div>
                    )
                }
            </div>
        </main>
    )

}

export default ReservationDetails