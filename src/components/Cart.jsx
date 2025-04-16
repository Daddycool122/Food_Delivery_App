import { clearCart } from "../../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    // Dispatch an action
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 w-8/12 m-auto">
      <h2 className="font-bold text-xl">Cart</h2>
      {cartItems.length === 0 ? (
        <h2>Cart is empty. Please add some items to the cart</h2>
      ) : (
        <button
          onClick={handleClearCart}
          className="bg-black text-white border w-2/12 rounded-lg mt-5"
        >
          Clear cart
        </button>
      )}
      <ItemList items={cartItems} />
    </div>
  );
}

export default Cart;
