import PropTypes from 'prop-types';

function Container({children}) {

    return(
        <div className='max-w-[75rem] mx-auto px-6'>
            {children}
        </div>
    )

}

Container.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Container