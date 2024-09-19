import { api } from "../api/axiosConfig.js";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import AttractionCard from "../components/AttractionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import img4 from "../assets/attraction/image4.png";

function AttractionPage() {
  const [attractions, setAttractions] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState({});
  const [showAllAttractions, setShowAllAttractions] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // await axios.get("http://localhost:3000/attractions").then(data => setAttractions(data))
      const { data: {attractions} } = await api.get("/attractions?limit=100");
      setAttractions(attractions);

      const responseCategory = await api.get("/categories");
      setCategory(responseCategory.data);
    };
    fetchData();
  }, [filter]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleFilter = (tag) => {
    setShowMenu(!showMenu);
    setFilter(tag);
  };

  const showAll = async () => {
    setShowAllAttractions(!showAllAttractions);
  };

  const filteredAttractions = attractions.filter((element) => {
    return filter.id ? element.Category.id === filter.id : true;
  });

  const displayedAttractions = filteredAttractions.slice(
    0,
    showAllAttractions ? filteredAttractions.length : 15
  );

  return (
    <div className="bg-backgroundColor">
      <header className="text-center p-8">
        <h1 className="text-2xl font-bold  text-white">
          En quête de frissons et de terreur ? Découvrez des attractions toutes
          aussi <span className="text-primaryColor">terrifiantes</span> les unes
          que les autres...
        </h1>
      </header>
      <img
        src={img4}
        alt="image zombie "
        className="rounded-lg mb-4  mx-auto border-[2px] border-[#72232D]"
      />

      <section className="mt-12">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-8 text-white">
          Nos attractions
        </h2>

        <div className="flex justify-center items mb-6 pb-[40px] md:pr-[920px] relative">
          <div>
            <button
              className="bg-primaryColor text-white py-1 px-6 text-sm md:py-2 md:px-12 md:text-base rounded"
              onClick={toggleMenu}
            >
              Categories
              <FontAwesomeIcon icon={faChevronDown} className="ml-6" />
            </button>
            {showMenu && (
              <ul className="relative left-0 bg-[#330E14] text-white">
                {category.map((tag) => (
                  <li
                    key={tag.id}
                    name={tag.name}
                    className="px-4 py-2 hover:bg-primaryColor cursor-pointer"
                  >
                    <a onClick={() => handleFilter(tag)}>{tag.name}</a>
                  </li>
                ))}
                <li className="px-4 py-2 hover:bg-primaryColor cursor-pointer">
                  <a onClick={() => handleFilter({})}>Aucune</a>
                </li>
              </ul>
            )}
          </div>
        </div>

        <Container className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {displayedAttractions.map((attraction) => {
            const shortDescription =
              attraction.description.split(" ").slice(0, 12).join(" ") +
              (attraction.description.split(" ").length > 12 ? "..." : "");

            return (
              <AttractionCard
                key={attraction.id}
                id={attraction.id}
                name={attraction.name}
                description={shortDescription}
                category={attraction.Category.name}
              />
            );
          })}
        </Container>

        <h3 className="text-center text-xl md:text-3xl font-bold mb-8 pt-[65px] text-white">
          Vous avez vu {displayedAttractions.length} attractions sur{" "}
          {attractions.length}
        </h3>

        <div className="flex justify-center mb-6">
          {!filter.id ? (
            <button
              className="bg-primaryColor text-white py-2 px-8 md:py-4 md:px-20 rounded"
              onClick={showAll}
            >
              {!showAllAttractions ? "VOIR TOUTES" : "VOIR MOINS"}
            </button>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}

export default AttractionPage;
