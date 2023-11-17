import React from "react";
import Banner from "./../images/banner.jpg";
import MainCategory from "./MainCategory";

function Main() {
  return (
    <main className="mt-[85px] w-[100%]">
      <div className="banner bg-contain w-[95%]">
        <img src={Banner} alt="banner" />
      </div>
      <MainCategory title="MEDAL WORTHY BRANDS TO BAG" />
      <MainCategory title="GRAND GLOBAL BRANDS" />
      <MainCategory title="shop by category" />
    </main>
  );
}

export default Main;
