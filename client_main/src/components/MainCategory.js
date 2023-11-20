import React, { useState, useEffect } from "react";

import MainCategoryItem from "./MainCategoryItem.js";

function MainCategory(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.log("Some error occured"));
  }, []);
  return (
    <div className="category">
      <div className="category_title mt-[50px] mb-[10px] ml-[30px] font-bold">
        <h4 className="uppercase text-categoryHeader">{props.title}</h4>
      </div>
      <div className="category_content flex justify-evenly flex-wrap">
        {products.length > 0 &&
          products.map((product) => (
            <MainCategoryItem product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default MainCategory;
