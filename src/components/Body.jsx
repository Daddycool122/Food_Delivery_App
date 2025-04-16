import RestaurentCard, { IsOpen } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBody from "../../utils/useBody";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import React from "react";

function Body() {
  let listOfRestaurents = useBody();
  let [filteredRestaurents, setFilteredRestaurents] = useState([]);
  let [searchText, setSearchText] = useState("");
  const IsRestaurantOpen = IsOpen(RestaurentCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Initialize filteredRestaurents when listOfRestaurents is updated
  useEffect(() => {
    setFilteredRestaurents(listOfRestaurents);
  }, [listOfRestaurents]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h2 className="text-center text-lg mt-10">
        Looks like you are offline. Please check your internet connection
      </h2>
    );
  }

  return !listOfRestaurents || listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-5 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <div className="flex items-center w-full sm:w-auto">
          <input
            type="text"
            className="w-full sm:w-64 p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />
          <button
            className="ml-2 bg-green-200 py-2 px-4 border border-gray-400 rounded-lg hover:bg-green-300 transition"
            onClick={() => {
              const filtered = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurents(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-yellow-200 py-2 px-4 border border-gray-400 rounded-lg hover:bg-yellow-300 transition"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurents(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="flex items-center w-full sm:w-auto">
          <label htmlFor="username" className="mr-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="w-full sm:w-40 p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurents.map((eachRestro) => (
          <Link key={eachRestro.info.id} to={"/restaurants/" + eachRestro.info.id}>
            {eachRestro.info.isOpen ? (
              <IsRestaurantOpen resData={eachRestro} />
            ) : (
              <RestaurentCard resData={eachRestro} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;