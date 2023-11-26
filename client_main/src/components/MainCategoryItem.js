import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "./../utils/slices/cartSlice.js";
import ImageArea from "./ImageArea.js";

function MainCategoryItem({ product, watch }) {
  const dispatch = useDispatch();
  const url_path = `/product_details/${product.id}`;
  return (
    <Link to={url_path} className="category_items flex flex-col">
      <ImageArea product={product} watch={watch} />
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
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          dispatch(add(product));
        }}
      >
        Add To Cart
      </button>
      <button className="m-1 rounded-md" style={{ backgroundColor: "yellow" }}>
        Buy Now
      </button>
    </Link>
  );
}

export default MainCategoryItem;
