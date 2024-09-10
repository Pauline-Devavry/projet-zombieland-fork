import PropTypes from 'prop-types';

function AttractionCard({name, description}) {
    
    return (
        <div className="bg-[#330E14] p-6 rounded-[15px] flex flex-col gap-4 border-[2px] border-[#72232D] items-center ">
            <img src="https://www.nigloland.fr/wp-content/uploads/2017/10/20170623_175429_DSC_4836Copie-1-01.jpg" alt="" className="rounded-[7px]"/>
            <h2>{name}</h2>
            <p className="text-center font-thin">
                {description}
            </p>
            <a href="#" className="bg-primaryColor py-2 px-4 rounded">+ d&apos;infos</a>
        </div>
    )
    
}

AttractionCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
};

export default AttractionCard