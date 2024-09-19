import { useEffect, useState } from "react"
import { api } from "../../api/axiosConfig"
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";


function AttractionEditForm() {

    const { id } = useParams()

    const [formData, setFormData] = useState({
        name: "",
        file: null,
        category: 1,
        description: "",
        image_url: ""
    })
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/attractions/${id}`)
                const attraction = response.data
                setFormData({
                    name: attraction.name,
                    image_url: attraction.image_url,
                    description: attraction.description,
                    file: null,
                    category: attraction.category
                })
                const { data } = await api.get("/categories")
                setCategories(data)
            } catch {
                toast.error("Erreur lors de la récupération des données")
            }
        }
        fetchData()
    },[id])

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
            let newImage = formData.image_url;
            if(formData.file) {
                const formDataImage = new FormData()
                formDataImage.append('image', formData.file)
                const { data: { imgUrl } } = await api.post("/s3/upload-image", formDataImage, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                newImage = imgUrl
            }
            await api.patch(`/attractions/${id}`, {
                name: formData.name,
                image_url: newImage,
                description: formData.description,
                category_id: formData.category
            })
            toast("Attraction mise à jour !", {theme: "light", type: "success"})
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
                            <h2 className="mb-2">Modifier une attraction</h2>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <input type="file" name="file" id="file_input" className="hidden" onChange={handleFormChange}/>
                                    <label htmlFor="file_input" className="border border-primaryColor border-dashed  w-[365px] h-[144px] flex items-center justify-center rounded cursor-pointer bg-white">
                                        <span className="text-adminTextGrayColor font-light">{formData.file ? formData.file.name : "Télécharger une image"}</span>
                                    </label>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="attraction_name">Nom de l&apos;attraction</label>
                                    <input type="text" name="name" id="attraction_name" className="border border-primaryColor rounded" onChange={handleFormChange} value={formData.name} required/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="attraction_category">Séléctionnez catégories</label>
                                    <select name="category" id="attraction_category" className="border border-primaryColor rounded" required value={formData.category} onChange={handleFormChange}>
                                        {
                                            categories?.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="attraction_description">Description</label>
                                    <textarea name="description" id="attraction_description" rows={8} className="border border-primaryColor rounded" value={formData.description} onChange={handleFormChange} required/>
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

export default AttractionEditForm