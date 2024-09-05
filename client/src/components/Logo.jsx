import PropTypes from 'prop-types';
import ZombieLandLogo from "../assets/logos/zombieland-logo.svg"

function Logo({width = "w-8", text = "text-[19px]"}) {
    
    return (
        <div className="flex items-center gap-4">
            <img className={width} src={ZombieLandLogo} alt="Logo de Zombieland"/>
            <span className={text}>Zombieland</span>
        </div>
    )
    
}

Logo.propTypes = {
    width: PropTypes.string,
    text: PropTypes.string
};

export default Logo