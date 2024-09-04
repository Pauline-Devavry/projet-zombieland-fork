import PropTypes from 'prop-types';

function RedShadow({className = ''}) {

    return (
        <div className={`h-[500px] w-[500px] bg-primaryColor blur-3xl opacity-15 rounded-full absolute -z-50 ${className}`}/>
    )

}

RedShadow.propTypes = {
    className: PropTypes.string,
};

export default RedShadow