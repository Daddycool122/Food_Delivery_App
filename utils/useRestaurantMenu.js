import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]= useState(null);
    useEffect(() => {
        fetchMenu();
      }, []);
    
      async function fetchMenu() {
        const data = await fetch(RESTAURANT_MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
      }
    

    return resInfo;
}
export default useRestaurantMenu;