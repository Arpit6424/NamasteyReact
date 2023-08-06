import { Link } from "react-router-dom";
import RestauaantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchResList = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.596217&lng=73.7514631&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const list = await response.json();
    setResList(
      list?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      list?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(list?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle);
  };
  useEffect(() => {
    fetchResList();
  }, []);

  return (
    <div>
      <div className="filter">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const filteredList = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterList(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.rating.rating_text > 4
            );
            setFilterList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterList.map((data) => {
          return (
            <Link key={data.info.id}>
              <RestauaantCard data={data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
