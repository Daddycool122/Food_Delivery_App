import React from "react";

import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function RestaurantMenu() {

  const [showIndex,setShowIndex]= useState(null);

  const { resId } = useParams();
  console.log(resId);

  const resInfo= useRestaurantMenu(resId)


  //it will return Shimmer until the data has been fetched
  if (resInfo === null) {
    return <Shimmer />;
  }

  // after the data has been fetched then only you can destructure resInfo
  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;

  // after the data has been fetched then only you can destructure resInfo
  
    console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  
  const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>{
    return(
    c.card.card?.["@type"]==
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
  })
  //console.log(categories);
  
  return (
    <div className="text-center ">
      <h1 className="font-bold text-2xl my-5">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} {" - "}
        {costForTwoMessage}
      </p>

      {/**/}
      {categories.map((eachCategory,index)=>{

        return (

          // Controlled component
          <RestaurantCategory 
           key={eachCategory.card.card.type}
           data={eachCategory.card.card}
           showItems={index===showIndex && true}
           setShowIndex={()=>setShowIndex(index)}
           />
           
        )
      })}

      
    </div>
  );
}

export default RestaurantMenu;
