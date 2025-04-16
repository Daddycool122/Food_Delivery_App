import React from "react";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import { CDN_URL } from "../../utils/constants";

function RestaurentCard(props) {
    const {loggedInUser} = useContext(UserContext);
    const { resData } = props; // Destructure resData directly from props
    const {name,locality,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;
    return (
        <div className=" m-2 h-[400px] p-2 w-60 bg-gray-200 rounded-lg hover:bg-gray-200  hover:border border-yellow-500 ">
            <img
                className="h-40 w-60 rounded-lg"
                src={`${CDN_URL+cloudinaryImageId}`}
                alt={name}
            />
            <h3 className="font-bold text-lg py-1">{name}</h3>
            <h4>{locality}</h4>
            <h4>{cuisines.join(`,\n`)}</h4>
            <h5 >{avgRating}</h5>
            <h5 >{costForTwo}</h5>
            <h5>User: {loggedInUser}</h5>
           
        </div>
    );
};

    //Higher order component---> input (restaurant card)---> output(restaurant card isOpen)
    
   export const IsOpen = (RestaurentCard)=>{
    return (props)=>{
        const { resData } = props; // Destructure resData directly from props
        const {isOpen} = resData?.info;
        return (
            <div>
                {isOpen
                ?
                <label className="absolute bg-green-600 text-white  p-1 m-2 rounded-sm"> open</label>
                :
                <label className="absolute bg-red-600 text-black m-2 p-1 rounded-sm"> closed</label>
                }
                <RestaurentCard {...props}/>
            </div>
        );
    };
};
export default RestaurentCard;
