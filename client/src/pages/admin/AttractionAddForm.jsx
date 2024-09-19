import { useEffect, useState } from "react"
import { api } from "../../api/axiosConfig"
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function AttractionAddForm() {

    const [formData, setFormData] = useState({
        name: "",
        file: null,
        category: "",
        description: ""
    })

    const handleFormChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: type === "file" ? files[0] : value
            }
        })
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(formData)
        } catch {
            toast("Une erreur est survenue", {type: "error", theme: "light"})
        }
    }


    return (
        <div className=" h-full text-adminTextColor flex flex-col items-center ">
                    <div className="flex w-full">
                    <Link to={"/admin/attractions"} className="text-lg flex gap-4 items-center w-fit">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-primaryColor"/>
                        Retour
                    </Link>
                    </div>
                    <div className="flex-grow flex items-center">
                        <form className="w-[365px]" onSubmit={handleFormSubmit}>
                            <h2 className="mb-2">Ajouter une attraction</h2>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <input type="file" name="file" id="file_input" className="hidden" onChange={handleFormChange}/>
                                    <label htmlFor="file_input" className="border border-primaryColor border-dashed  w-[365px] h-[144px] flex items-center justify-center rounded cursor-pointer bg-white">
                                        <span className="text-adminTextGrayColor font-light">Télécharger une image</span>
                                    </label>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="attraction_name">Nom de l&apos;attraction</label>
                                    <input type="text" name="name" id="attraction_name" className="border border-primaryColor rounded" onChange={handleFormChange} value={formData.name}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="attraction_category">Séléctionnez catégories</label>
                                    <select name="category" id="attraction_category" className="border border-primaryColor rounded">
                                        <option value="">Zombulator</option>
                                        <option value="">Roler</option>
                                        <option value="">Zombulator</option>
                                        <option value="">Zombulator</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="attraction_description">Description</label>
                                    <textarea name="description" id="attraction_description" rows={8} className="border border-primaryColor rounded"/>
                                </div>
                                <button className="bg-primaryColor text-white py-2 rounded">
                                    Ajouter
                                </button>
                            </div>
                            
                        </form>
                    </div>
        </div>
    )

}

export default AttractionAddForm