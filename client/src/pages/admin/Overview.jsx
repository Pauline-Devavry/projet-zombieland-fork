import { useEffect, useState } from "react"
import { api } from "../../api/axiosConfig"

function Overview() {


    // Juste for now, later create a endpoint for fetching theses data


    const [members, setMembers] = useState([])
    const [messages, setMessages] = useState([])
    const [attractions, setAttractions] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const membersList = await api.get("/users")
            setMembers(membersList.data)
            const messagesList = await api.get("/messages?limit=100")
            setMessages(messagesList.data)
            const attractionsList = await api.get("/attractions")
            setAttractions(attractionsList.data)
        }
        fetchData()
    }, [])

    return (
        <div className="h-full grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 p-6 rounded-lg bg-adminCardColor max-h-[164px]">
                <p className="text-adminTextGrayColor font-light">
                    Total messages recu
                </p>
                <p>
                    {messages.length}
                </p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-lg bg-adminCardColor max-h-[164px]">
                <p className="text-adminTextGrayColor font-light">
                    Total de membres inscrit
                </p>
                <p>
                    {members.length}
                </p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-lg bg-adminCardColor max-h-[164px]">
                <p className="text-adminTextGrayColor font-light">
                    Total d&apos;attraction
                </p>
                <p>
                    {attractions.length}
                </p>
            </div>
        </div>
    )

}

export default Overview