import React from "react";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { BASE_URL } from "./../../utils/constant";

import { add, remove, del } from "./../../utils/slices/cartSlice";

function Item({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="item_container border-2 h-[125px] mb-3 rounded-md pl-2 flex">
      <div className="item_image">
        <img
          src={BASE_URL + product.imageUrl1}
          width="80px"
          alt={product.brand}
        />
      </div>
      <div className="item_details ml-7 grow p-2">
        <div>{product.description}</div>
        <div>{product.brand}</div>
        <div>{product.price}</div>
        <div>{product.specialMessage}</div>
        <div className="flex justify-between w-full">
          <span>Quantity</span>
          <div
            onClick={() => {
              dispatch(add(product));
            }}
          >
            <AddIcon />
          </div>
          {product.quantity}
          <div
            onClick={() => {
              dispatch(remove(product.id));
            }}
          >
            <RemoveIcon />
          </div>
          <div
            onClick={() => {
              dispatch(del(product.id));
            }}
          >
            <DeleteOutlineIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
