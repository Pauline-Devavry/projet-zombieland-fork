import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import AttractionCard from "../components/AttractionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function AttractionPage() {
  const [attractions, setAttractions] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState({});
  const [showAllAttractions, setShowAllAttractions] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // await axios.get("http://localhost:3000/attractions").then(data => setAttractions(data))
      const response = await axios.get(
        "http://localhost:3000/attractions?limit=100"
      );
      setAttractions(response.data);

      const responseCategory = await axios.get(
        "http://localhost:3000/categories"
      );
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
        src="https://www.freevector.com/uploads/vector/preview/2607/FreeVector-Zombie-Cartoon.jpg"
        alt="image zombie "
        className="rounded-lg mb-4 w-1/3 mx-auto border-[2px] border-[#72232D]"
      />
      <div className="flex justify-center">
        <img src="" alt="" className="" />
      </div>
      <section className="mt-12">
        <h2 className="text-center text-3xl font-bold mb-8  text-white">
          Nos attractions
        </h2>
        <div className="flex justify-center items mb-6 pb-[40px] pr-[920px] relative">
          <div>
            <button
              className="bg-primaryColor text-white py-2 px-12 rounded"
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

        <Container className="grid grid-cols-3 gap-4">
          {displayedAttractions.map((attraction) => {
            return (
              <AttractionCard
                key={attraction.id}
                id={attraction.id}
                name={attraction.name}
                description={attraction.description}
              />
            );
          })}
        </Container>

        <h3 className="text-center text-3xl font-bold mb-8 pt-[65px] text-white">
          Vous avez vu {displayedAttractions.length} attractions sur{" "}
          {attractions.length}
        </h3>
        <div className="flex justify-center mb-6">
          {!filter.id ? (
            <button
              className="bg-primaryColor text-white py-4 px-20 rounded "
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
