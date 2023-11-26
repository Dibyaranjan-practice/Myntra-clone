import React from "react";
import { useSelector } from "react-redux";
import ViewItems from "../cart/ViewItems";

function WatchList() {
  const watchlist = useSelector((store) => store.watch);
  return (
    <div className="cart_container relative top-[100px] left-0 flex p-7 h-[500px]">
      <div className="view_items w-3/6 border-r-2 border-r-super">
        <ViewItems cartItems={watchlist} area="WishList" />
      </div>
    </div>
  );
}

export default WatchList;
