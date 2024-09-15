import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function AttractionCard({ name, description, id, category }) {
  return (
    <div className="bg-[#330E14] p-6 rounded-[15px] flex flex-col gap-4 border-[2px] border-[#72232D] items-center">
      <img
        src="https://www.nigloland.fr/wp-content/uploads/2017/10/20170623_175429_DSC_4836Copie-1-01.jpg"
        alt=""
        className="rounded-[7px]"
      />

      <div className="flex items-center gap-2">
        <h2>{name}</h2>
        <p className="inline-block bg-[#7B7B7B] text-white text-sm px-2 py-0.5 rounded-full">
          {category}
        </p>
      </div>

      <p className="text-center font-thin">{description}</p>

      <NavLink
        end
        to={`/attraction/${id}`}
        className="bg-primaryColor py-2 px-4 rounded"
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
