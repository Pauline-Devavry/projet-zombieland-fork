import { useEffect, useState } from "react"
import { api } from "../../api/axiosConfig"

function Overview() {


    // Juste for now, later create a endpoint for fetching theses data


    const [totalMembers, setTotalMembers] = useState()
    const [totalMessages, setTotalMessages] = useState()
    const [totalAttractions, setTotalAttractions] = useState()

    

    useEffect(() => {
        const fetchData = async () => {
            const [membersRes, messagesRes, attractionsRes] = await Promise.all([
                api.get("/users/total"),
                api.get("/messages/total"),
                api.get("/attractions/total"),
            ])
            setTotalAttractions(attractionsRes.data.total)
            setTotalMessages(messagesRes.data.total)
            setTotalMembers(membersRes.data.total)

            
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
                    {totalMessages}
                </p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-lg bg-adminCardColor max-h-[164px]">
                <p className="text-adminTextGrayColor font-light">
                    Total de membres inscrit
                </p>
                <p>
                    {totalMembers}
                </p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-lg bg-adminCardColor max-h-[164px]">
                <p className="text-adminTextGrayColor font-light">
                    Total d&apos;attraction
                </p>
                <p>
                    {totalAttractions}
                </p>
            </div>
        </div>
    )

}

export default Overview