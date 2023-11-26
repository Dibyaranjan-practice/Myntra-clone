import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { add as watchAdd } from "./../utils/slices/watchSlice.js";
import { BASE_URL } from "./../utils/constant.js";

function ImageArea({ product, watch }) {
  const [image, setImage] = useState(product.imageUrl1);
  const dispatch = useDispatch();
  const wishColor = watch ? "text-fuchsia-500" : "text-white";

  useEffect(() => {
    const images = [
      product.imageUrl1,
      product.imageUrl2,
      product.imageUrl3,
      product.imageUrl4,
      product.imageUrl5,
    ];
    let i = 0;
    setInterval(() => {
      i += 1;
      i %= 5;
      setImage(images[i]);
    }, 3000);
  }, []);

  return (
    <div className="item_image relative top-0 left-0 z-10">
      <img src={BASE_URL + image} alt="not found" width="300px" />
      <div className="rating absolute bottom-0 left-2">
        <span>{product.ratingStar}⭐|</span>
        <span>{product.ratingCount}</span>
      </div>
      <div
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          dispatch(watchAdd(product));
        }}
        className={
          wishColor +
          " wishlist absolute top-8 right-5 text-4xl flex justify-center items-center rounded-sm z-[1000] cursor-pointer"
        }
      >
        <FavoriteBorderIcon fontSize="large" />
      </div>
    </div>
  );
}

export default ImageArea;
