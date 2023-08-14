import { Link } from "react-router-dom";
import RestauaantCard, { withPromtedLabel } from "./RestaurantCard";

import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Greeting from "./Greeting";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardPromoted = withPromtedLabel(RestauaantCard);

  const fetchResList = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );
  }

  return (
    <div>
      <div className="m-4 p-4">
        <input
          className="border border-solid border-black"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.rating.rating_text > 4
            );
            setFilterList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <label htmlFor="">UserName</label>
        <input
          className="border border-solid border-black p-2"
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {filterList?.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant?.info.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
                <RestaurantCardPromoted data={restaurant} />
              ) : (
                <RestauaantCard data={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
      <Greeting name="arpit" />
    </div>
  );
};

export default Body;
