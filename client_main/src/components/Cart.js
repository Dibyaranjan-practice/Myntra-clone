import React from "react";
import { useSelector } from "react-redux";
import ViewItems from "./cart/ViewItems";
import Summary from "./cart/Summary";

function Cart() {
  const cartItems = useSelector((store) => store.cart);
  return (
    <div className="cart_container relative top-[100px] left-0 flex p-7 h-[500px]">
      <div className="view_items w-3/6 border-r-2 border-r-super">
        <ViewItems cartItems={cartItems} area="Cart" />
      </div>
      <div className="summary w-3/6">
        <Summary cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
