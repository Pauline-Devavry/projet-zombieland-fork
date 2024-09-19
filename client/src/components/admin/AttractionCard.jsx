
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


function AttractionCard({data}) {

    return (
        <div className="w-[190px] h-[293px]  bg-adminCardColor border border-adminBorderColor rounded-[10px] relative p-[12px] overflow-hidden z-40 flex flex-col gap-3">
                    <div>
                        <img src="https://media.istockphoto.com/id/137803728/fr/vectoriel/carte-de-parc-dattractions.jpg?s=612x612&w=0&k=20&c=qZ47nmcTgjaiPA2PMANHQ3oUvDvJ6m6F6Thz4-sX-VI=" alt="" className="rounded-[5px]"/>
                    </div>
                    <div className="flex-grow flex flex-col justify-between">

                        <div>
                            <h3>{data.name}</h3>
                            <p className="text-adminTextGrayColor font-thin text-[12px]">
                                {data.description} 
                            </p>
                        </div>

                        <div className="flex justify-between ">
                            <Link className="z-30 text-white">
                                Modifier
                            </Link>
                            <FontAwesomeIcon icon={faTrash} className="text-primaryColor"/>
                        </div>

                    </div>
                    <div className="absolute h-[107px] w-[107px] bg-primaryColor rounded-full bottom-0 left-0 -translate-x-[20px] translate-y-[40px] -z-10"/>
            </div>
    )

}

export default AttractionCard