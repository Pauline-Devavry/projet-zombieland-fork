import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function AttractionCard({ name, description, id, category }) {
  return (
    <div className="bg-[#330E14] p-6 rounded-[15px] flex flex-col gap-4 border-[2px] border-[#72232D] items-center">
      <div className="relative">
        <img
          src="https://www.nigloland.fr/wp-content/uploads/2017/10/20170623_175429_DSC_4836Copie-1-01.jpg"
          alt=""
          className="w-full h-auto rounded-md md:rounded-[7px]" // Full width on small screens, auto height
        />
        <p className="absolute top-2 left-2 bg-[#7B7B7B] text-white text-xs md:text-sm px-2 py-0.5 rounded-full">
          {category}
        </p>
      </div>

      <h2>{name}</h2>

      <p className="text-center font-thin">{description}</p>

      <NavLink
        end
        to={`/attraction/${id}`}
        className="bg-primaryColor py-1 px-3 text-sm rounded md:py-2 md:px-4 md:text-base"
      >
        + d&apos;infos
      </NavLink>
    </div>
  );
}

AttractionCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
};

export default AttractionCard;
