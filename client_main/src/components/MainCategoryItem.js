import React from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "./../utils/constant.js";
import { add } from "./../utils/slices/cartSlice.js";

function MainCategoryItem({ product }) {
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(add(product));
  };
  return (
    <div className="category_items flex flex-col bg-sky-500">
      <div className="item_image relative top-0 left-0 -z-10">
        <img src={BASE_URL + product.imageUrl1} alt="not found" width="300px" />
        <div className="rating absolute bottom-0 left-2">
          <span>{product.ratingStar}⭐|</span>
          <span>{product.ratingCount}</span>
        </div>
      </div>
      <div className="company_name ml-2">{product.brand}</div>
      <div className="description ml-2">{product.description}</div>
      <div className="price ml-2">
        <span>Rs. {product.currentPrice}</span>
        <span className="line-through">Rs. {product.originalPrice}</span>
        <div
          className="special_message h-[30px] pt-2"
          style={{ color: "#ef4444" }}
        >
          {product.specialMessage}
        </div>
      </div>

      <button
        className="m-1 rounded-md"
        style={{ backgroundColor: "yellow" }}
        onClick={addHandler}
      >
        Add To Cart
      </button>
      <button className="m-1 rounded-md" style={{ backgroundColor: "yellow" }}>
        Buy Now
      </button>
    </div>
  );
}

export default MainCategoryItem;
