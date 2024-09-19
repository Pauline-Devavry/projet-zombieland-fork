import { useEffect, useState } from "react"
import { api } from "../../api/axiosConfig"
import { useParams, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import profilePlaceholder from "../../assets/admindashboard/profile-placeholder.svg"

function MessageDetails() {

    const [message, setMessage] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get(`/messages/${id}`)
            setMessage(response.data)
        }
        fetchData()
    }, [id])

    return (
        <main className="h-full flex flex-col">
            <div>
                <Link to={"/admin/messages"} className="text-lg flex gap-4 items-center w-fit">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-primaryColor"/>
                    Retour
                </Link>
            </div>
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-adminCardColor max-w-[412px] p-4 flex flex-col gap-6 rounded">
                    <div className="flex gap-6">
                        <img src={profilePlaceholder} alt=" " />
                        <div className="flex flex-col">
                            <span>{message.first_name} {message.name}</span>
                            <span>{message.email}</span>
                        </div>
                    </div>
                    <p className="text-adminTextGrayColor font-thin">
                        {
                            message.content
                        }
                    </p>
                </div>
            </div>
        </main>
    )
        
    

}

export default MessageDetails