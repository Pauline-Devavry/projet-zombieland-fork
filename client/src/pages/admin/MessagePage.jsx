import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faPenToSquare, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../api/axiosConfig";
import { useEffect, useState } from "react";
import Pagination from "../../components/admin/Pagination";

function MessagePage() {

    const [messagesList, setMessagesList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPage] = useState()
    const [totalMessages, setTotalMessages] = useState(0)

    useEffect(() => {
        const fetchData = async () => {

            try {
                // const response = await api.get(`/messages?page=${page}`)
                // setMessagesList(response.data.messages)

                const { data: {messages, totalPages} } = await api.get(`/messages?page=${currentPage}`)
                const totalMessagesRes = await api.get("/messages/total")
                setMessagesList(messages)
                setTotalPage(totalPages)
                setTotalMessages(totalMessagesRes.data.total)
            } catch (error) {
                console.log(error)
            }

        }
        fetchData()
        
    }, [currentPage])

    const handlePagination = (page) => {
        if(page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    

    return (
        <div className="flex justify-between w-full">
            <div className="flex flex-col justify-between w-full">
                <ul className="font-thin text-adminTextColor flex flex-col gap-3 flex-grow">
                {messagesList.map((message) => (
                    <li className="flex gap-2 w-full" key={message.id}>
                    <div className="flex bg-adminSideBarColor border border-adminBorderColor rounded p-2 gap-2 flex-1">
                        <div className="flex gap-4 items-center w-full">
                        <p className="w-1/4 min-w-[100px]">{message.first_name} {message.name}</p>
                        <p className="w-1/4 min-w-[150px]">{message.email}</p>
                        
                        <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap w-[400px] max-w-[100%]">
                            {message.content}
                        </p>
                        </div>
                    </div>
                    <NavLink
                        to={`/admin/message/${message.id}`}
                        className="bg-adminSideBarColor border border-adminBorderColor rounded p-2 text-primaryColor"
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </NavLink>
                    </li>
                ))}
                </ul>
                
                <Pagination onPageChange={handlePagination} currentPage={currentPage} />
            </div>

            <div className="w-1/3 max-w-[calc(33%-1rem)] flex-shrink-0 ml-4">
                <div className="bg-adminCardColor p-4 rounded-lg min-h-[140px] flex flex-col justify-between relative overflow-hidden">
                <span className="text-adminTextGrayColor">Total messages</span>
                <span className="self-end z-20 text-white">{totalMessages}</span>
                <div className="absolute w-32 h-32 bg-primaryColor rounded-full -right-8 -bottom-8" />
                </div>  
            </div>
        </div>
    );
}

export default MessagePage;