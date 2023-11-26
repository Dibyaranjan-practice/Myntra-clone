import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

import Cat from "./../../images/cat.png";

function ViewItems({ cartItems, area }) {
  return (
    <div className="item_container p-4 h-full">
      {cartItems.length === 0 && (
        <React.Fragment>
          <h1 className="mb-[10px]">Your {area} says....</h1>
          <img src={Cat} alt="missing logo" width="100px" />
        </React.Fragment>
      )}
      {cartItems.map((item) => {
        return <Item key={item.id} product={item} type={area === "Cart"} />;
      })}
      <Link to="/">Continue shopping</Link>
    </div>
  );
}

export default ViewItems;
