import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import React from "react";

function Header() {
  const [btnName, setBtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-yellow-200 sm:bg-red-200 lg:bg-green-200">
      <div className="flex items-center">
        <img className="w-16 sm:w-20" src={LOGO_URL} alt="Logo" />
      </div>

      <button
        className="sm:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row items-center absolute sm:static top-16 left-0 w-full sm:w-auto bg-yellow-200 sm:bg-transparent p-4 sm:p-0 z-10`}
      >
        <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <li className="text-lg">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="hover:text-green-700 hover:scale-105 transition-all">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-green-700 hover:scale-105 transition-all">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="hover:text-green-700 hover:scale-105 transition-all">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li className="hover:text-green-700 hover:scale-105 transition-all">
            <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
              Cart ({cartItems.length} items)
            </Link>
          </li>
          <li className="hover:text-green-700 hover:scale-105 transition-all">
            <Link to="/grocery" onClick={() => setIsMenuOpen(false)}>
              Grocery
            </Link>
          </li>
          <button
            className="px-4 py-2 text-black bg-white border border-gray-400 rounded-lg hover:text-green-700 hover:border-green-700 hover:scale-105 transition-all"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
              setIsMenuOpen(false);
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