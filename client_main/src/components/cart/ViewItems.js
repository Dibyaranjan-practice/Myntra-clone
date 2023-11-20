import React from "react";
import Item from "./Item";

import Cat from "./../../images/cat.png";

function ViewItems({ cartItems }) {
  return (
    <div className="item_container p-4 h-full">
      {cartItems.length === 0 && (
        <React.Fragment>
          <h1 className="mb-[10px]">Your Cart says....</h1>
          <img src={Cat} alt="missing logo" width="100px" />
        </React.Fragment>
      )}
      {cartItems.map((item) => {
        return <Item key={item.id} product={item} />;
      })}
      <div>Continue shopping</div>
    </div>
  );
}

export default ViewItems;
