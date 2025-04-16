import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";
import React from 'react'
/* eslint-disable react/prop-types */
function ItemList({ items }) {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
    alert("Item added to cart succesfully")
  };

  return (
    <div className="text-left space-y-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-4 border-b-2 border-gray-300 flex flex-col"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xl font-semibold">{item.card.info.name}</div>
              <div className="text-sm mt-1 text-gray-600">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
              <p className="text-xs text-gray-500 mt-2">
            {item.card.info.description}
          </p>
            </div>

            <div className="relative">
              {item.card.info.imageId ? (
                <img
                  src={`${CDN_URL}${item.card.info.imageId}`}
                  className="w-36 h-32 border rounded-lg"
                  alt={item.card.info.name}
                />
              ) : (
                <img
                  src="https://img.freepik.com/free-photo/ingredients-grilled-wood-flame-plate-generative-ai_188544-8881.jpg"
                  className="w-36 h-32 border rounded-lg"
                  alt="hiii"
                />
              )}

              <button
                onClick={() => {
                  handleAddItem(item);
                }}
                className="absolute bottom-1 right-1 p-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-gray-800 transition  w-20"
              >
                + Add
              </button>
            </div>
          </div>

         
        </div>
      ))}
    </div>
  );
}

export default ItemList;
