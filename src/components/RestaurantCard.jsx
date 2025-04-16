import React from "react";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import { CDN_URL } from "../../utils/constants";

function RestaurentCard(props) {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  const { name, locality, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="relative bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-full">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={`${CDN_URL + cloudinaryImageId}`}
        alt={name}
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <h4 className="text-sm text-gray-600 truncate">{locality}</h4>
        <p className="text-sm text-gray-700 line-clamp-2">
          {cuisines.join(", ")}
        </p>
        <div className="flex justify-between items-center mt-2">
          <h5 className="text-sm font-semibold">{avgRating} ⭐</h5>
          <h5 className="text-sm">{costForTwo}</h5>
        </div>
        <h5 className="text-xs text-gray-500 mt-1">User: {loggedInUser}</h5>
      </div>
    </div>
  );
}

export const IsOpen = (RestaurentCard) => {
  return (props) => {
    const { resData } = props;
    const { isOpen } = resData?.info;
    return (
      <div className="relative">
        <label
          className={`absolute top-2 left-2 px-2 py-1 text-white rounded-sm ${
            isOpen ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {isOpen ? "Open" : "Closed"}
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default React.memo(RestaurentCard);