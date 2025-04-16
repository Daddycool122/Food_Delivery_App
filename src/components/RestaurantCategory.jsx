import ItemList from "./ItemList";
import React from 'react'
/* eslint-disable react/prop-types */
function RestaurantCategory({data,showItems,setShowIndex}) {
    console.log(data);
    const handleClick = ()=>{
        setShowIndex();
    }
    
    
  return (
    <div className="w-6/12 mx-auto my-4 border rounded-lg bg-gray-200 shadow-lg p-4">
        {/* Accordion header*/}
        <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
            <span className="font-bold ">{data.title} ({data.itemCards.length})</span>
            <span>⬇</span>
        </div>
        {/* Accordion body*/}

        {showItems && <ItemList items={data.itemCards}/>}
        
    </div>
  )
}

export default RestaurantCategory