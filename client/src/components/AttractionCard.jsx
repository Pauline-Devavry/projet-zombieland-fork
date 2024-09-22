
import { NavLink } from "react-router-dom";

function AttractionCard({ data }) {
  return (
    <div className="bg-[#330E14] p-6 rounded-[15px] flex flex-col gap-4 border-[2px] border-[#72232D] items-center">
      <div className="relative">
        <img
          src={`${data.image_url}`}
          alt=""
          className="w-full h-auto rounded-md md:rounded-[7px]" // Full width on small screens, auto height
        />
        <p className="absolute top-2 left-2 bg-[#7B7B7B] text-white text-xs md:text-sm px-2 py-0.5 rounded-full">
          {data.category}
        </p>
      </div>

      <h2>{data.name}</h2>

      <p className="text-center font-thin">{data.description}</p>

      <NavLink
        end
        to={`/attraction/${data.id}`}
        className="bg-primaryColor py-1 px-3 text-sm rounded md:py-2 md:px-4 md:text-base"
      >
        + d&apos;infos
      </NavLink>
    </div>
  );
}


export default AttractionCard;
