import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Pagination({ currentPage, onPageChange }) {

    return (
            <div className="flex gap-4 items-center mt-4">
                <button className="border border-primaryColor text-black px-3 py-[2px] rounded hover:bg-primaryColor hover:text-white transition-colors delay-75 ease-in-out">
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => onPageChange(currentPage - 1)} />
                </button>
                <div>
                    <span className="text-xl text-adminTextColor">{currentPage}</span>
                </div>
                <button className="border border-primaryColor text-adminTextColor px-3 py-[2px] rounded hover:bg-primaryColor hover:text-white transition-colors delay-75 ease-in-out">
                    <FontAwesomeIcon icon={faChevronRight} onClick={() => onPageChange(currentPage + 1)} />
                </button>
            </div>
    )

}

export default Pagination