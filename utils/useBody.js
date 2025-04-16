import { useState, useEffect } from "react";

function useBody() {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurents(restaurants);
    console.log(restaurants);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurents;
}

export default useBody;
