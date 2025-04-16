import RestaurentCard ,{IsOpen}  from "./RestaurantCard";
import { useEffect, useState ,useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useBody from "../../utils/useBody";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import React from 'react'

function Body() {
  let listOfRestaurents = useBody();
  let [filteredRestaurents, setFilteredRestaurents] = useState([]);
  let [searchText, setSearchText] = useState("");
  const IsRestaurantOpen = IsOpen(RestaurentCard);

  const {loggedInUser,setUserName}= useContext(UserContext)


  // Initialize filteredRestaurents when listOfRestaurents is updated
  useEffect(() => {
    setFilteredRestaurents(listOfRestaurents);
  }, [listOfRestaurents]);


  const onlineStatus = useOnlineStatus();
  if(onlineStatus=== false){
    return <h2>Looks like you are  offline. Please check your internet connection</h2>
  }


  return !listOfRestaurents || listOfRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-5">
      <div className="flex items-center">
        <div className="search">
          <input
            type="text"
            className="m-4 p-3 h-1 border borer-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-200 py-1 px-3 border border-black rounded-lg"
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
        <div className="mx-16">
          <button
            className="py-1 px-3 bg-yellow-200 border rounded-lg border-black"
            onClick={() => {
              const filteredList = listOfRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurents(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
  
        <div>
          <label htmlFor="">Username: </label>
          <input
            type="text"
            id="name"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
  
      <div className="m-auto justify-between flex flex-wrap gap-4 mt-5">
        {filteredRestaurents.map((eachRestro) => (
          <Link key={eachRestro.info.id} to={"/restaurants/" + eachRestro.info.id}>
            {/* Add "open" label if the restaurant is open */}
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
};



export default Body;
