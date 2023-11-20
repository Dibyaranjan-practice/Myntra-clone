import React from "react";

function Summary({ cartItems }) {
  let totalOriginalPrice = 0,
    totalCurrentPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let product = cartItems[i];
    totalOriginalPrice += product.originalPrice * product.quantity;
    totalCurrentPrice += product.currentPrice * product.quantity;
  }
  let discount = Math.floor(
    ((totalOriginalPrice - totalCurrentPrice) * 100) / totalOriginalPrice
  );
  return (
    <div className="summary p-4">
      {cartItems.length === 0 && <h1> Your cart is empty</h1>}
      {cartItems.length > 0 && (
        <React.Fragment>
          <div className="total_current_price">
            <h1>Your Cart Value:-</h1>
            {totalCurrentPrice}
          </div>
          <div className="total_original_price">
            <h1>Original Value</h1>
            {totalOriginalPrice}
          </div>
          <div>
            <h1>Total Discount</h1>
            {discount} %
          </div>
          <div>
            <h1>Checkout</h1>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Summary;
