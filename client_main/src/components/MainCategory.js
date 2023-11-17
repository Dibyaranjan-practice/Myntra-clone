import React from "react";
import one from "./../images/categories/1.jpg";
import two from "./../images/categories/2.jpg";
import three from "./../images/categories/3.jpg";
import four from "./../images/categories/4.jpg";
import five from "./../images/categories/5.jpg";
import six from "./../images/categories/6.jpg";
import seven from "./../images/categories/7.jpg";
import eight from "./../images/categories/8.jpg";
import nine from "./../images/categories/9.jpg";
import ten from "./../images/categories/10.jpg";

function MainCategory(props) {
  return (
    <div className="category">
      <div className="category_title mt-[50px] mb-[10px] ml-[30px] font-bold">
        <h4 className="uppercase text-categoryHeader">{props.title}</h4>
      </div>
      <div className="category_content flex justify-evenly flex-wrap">
        <img src={one} alt="product" />
        <img src={two} alt="product" />
        <img src={three} alt="product" />
        <img src={four} alt="product" />
        <img src={five} alt="product" />
        <img src={six} alt="product" />
        <img src={seven} alt="product" />
        <img src={eight} alt="product" />
        <img src={nine} alt="product" />
        <img src={ten} alt="product" />
      </div>
    </div>
  );
}

export default MainCategory;
