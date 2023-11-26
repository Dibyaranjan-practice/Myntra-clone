import React, { useState, useEffect, useTransition } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./../utils/constant.js";
import { add as watchAdd } from "./../utils/slices/watchSlice.js";
function ProductDetails() {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    startTransition(() => {
      fetch("http://localhost:5000/api/product/" + id)
        .then((res) => res.json())
        .then((res) => setProduct(res))
        .catch(() => setError("Error Fetching data"));
    });
  }, [id]);

  return (
    <div className="product_details_container flex mt-[100px]">
      {isPending && !error && <h1>....Loading...</h1>}
      {!isPending && product && (
        <React.Fragment>
          <div className="product_images w-2/3 flex flex-wrap">
            <div className="image1">
              <img src={BASE_URL + product.imageUrl1} alt="product_image" />
            </div>
            <div className="image1">
              <img src={BASE_URL + product.imageUrl2} alt="product_image" />
            </div>
            <div className="image1">
              <img src={BASE_URL + product.imageUrl3} alt="product_image" />
            </div>
            <div className="image1">
              <img src={BASE_URL + product.imageUrl4} alt="product_image" />
            </div>
            <div className="image1">
              <img src={BASE_URL + product.imageUrl5} alt="product_image" />
            </div>
          </div>
          <div className="product_details w-1/3">
            <div className="company">{product.brand}</div>
            <div className="description">{product.description}</div>
            <div className="price">{product.originalPrice}</div>
            <div className="watch_buy">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  dispatch(watchAdd(product));
                }}
              >
                Add to Watch
              </button>
              <button>Buy Now</button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default ProductDetails;
