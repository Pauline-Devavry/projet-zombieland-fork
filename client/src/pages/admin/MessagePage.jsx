import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../api/axiosConfig";
import { useEffect, useState } from "react";


function MessagePage() {


    const [messagesList, setMessagesList] = useState([])
    const [page, setPage] = useState()
    const [totalPage, setTotalPage] = useState()

    useEffect(() => {
        const fetchData = async () => {

            try {
                // const response = await api.get(`/messages?page=${page}`)
                // setMessagesList(response.data.messages)

                const { data: {messages, totalPages} } = await api.get(`/messages?page=${page}`)
                setMessagesList(messages)
                setTotalPage(totalPages)
            } catch (error) {
                console.log(error)
            }

        }
        fetchData()
        
    }, [page])



    return (
        <div className="h-full flex gap-4">
            <ul className="w-3/4 font-thin text-adminTextColor flex flex-col gap-3">
                {
                    [...Array(10)].map((_, index) => (
                        <li className="flex gap-2 " key={index}>
                            <div className="flex bg-adminSideBarColor border border-adminBorderColor rounded p-2 gap-2 flex-1">
                                <div className="flex gap-4 ">
                                    <p className="whitespace-nowrap">Maxime Averty</p>
                                    <p className="whitespace-nowrap">maxime.averty.pro@gmail.com</p>
                                    <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[400px]">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, consectetur quae at quod dolorum libero tempore earum atque illum quos.
                                    </p>
                                </div>
                            </div>
                            <NavLink className="bg-adminSideBarColor border border-adminBorderColor rounded p-2 text-primaryColor">
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <div className="w-1/4">
                <div className="bg-adminCardColor p-4 rounded-lg min-h-[140px] flex flex-col justify-between relative overflow-hidden">
                    <span className="text-adminTextGrayColor">Total messages</span>
                    <span className="self-end z-20 text-white">234</span>
                    <div className="absolute w-32 h-32 bg-primaryColor rounded-full -right-8 -bottom-8"/>
                </div>
            </div>
        </div>
    );
}

export default MessagePage;