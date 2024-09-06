import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"


function MenuLink({faIcon, url = "", text}) {
    
    return (
        <NavLink to={url ? `/admin/${url}` : "/admin"} 
            className={({ isActive }) =>
                `p-2 flex items-center gap-2 rounded w-full ${isActive ? "bg-primaryColor text-white" : ""}`
            }>
            {({isActive}) => (
                <>
                <FontAwesomeIcon icon={faIcon} className={isActive ? "text-white" : "text-primaryColor"}/>
                {text}
                </>
            )}
    
        </NavLink>
)

}

MenuLink.propTypes = {
    faIcon: PropTypes.object,
    url: PropTypes.string,
    text: PropTypes.string
}

export default MenuLink