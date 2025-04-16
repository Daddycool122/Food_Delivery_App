import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import React from 'react'

function Header() {
  let [btnName, setBtnName] = useState("Login");
  console.log("Header render");

  useEffect(() => {
    console.log("useEffect");
  });

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items );
  console.log(cartItems);
  

  return (
    <div className="flex justify-between p-3 shadow-lg bg-yellow-200 lg:bg-green-200 sm:bg-red-200">
      <div className="">
        <img className="w-24" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center ">
        <ul className="flex m-3 items-center">
          <li className="px-3">
            {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li className="px-3 hover:text-green-700 hover:scale-105 transition-all text-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 hover:text-green-700 hover:scale-105 transition-all text-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3 hover:text-green-700 hover:scale-105 transition-all text-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" px-3 hover:text-green-700 hover:scale-105 transition-all text-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="px-3 hover:text-green-700 hover:scale-105 transition-all text-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-3 py-2 text-black bg-white border border-black rounded-lg hover:text-green-700 hover:border-green-700 hover:scale-110 transition-transform"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
