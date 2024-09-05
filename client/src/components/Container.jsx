import PropTypes from 'prop-types';

function Container({ children, className = '', ...rest }) {
    return (
        <div className={`max-w-[75rem] mx-auto px-6 ${className}`} {...rest}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};


export default Container;
