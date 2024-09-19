import PropTypes from "prop-types";


function AttractionImage({ image_url }) {
    const ImageUrl = "https://www.nigloland.fr/wp-content/uploads/2017/10/20170623_175429_DSC_4836Copie-1-01.jpg"

    return (
      <div className="bg-black p-4 rounded-[5px] w-[400px] h-[180px]">
        <img
          src={image_url || ImageUrl}
          alt="Attraction"
          className="rounded-[7px] h-full object-cover w-full"
        />
      </div>
    );
  }

  AttractionImage.propTypes = {
    image_url: PropTypes.string,
  };

export default AttractionImage;