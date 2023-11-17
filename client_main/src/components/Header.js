import React from "react";
import Logo from "./../images/myntra_logo.webp";
import HeaderNav from "./HeaderNav";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

function Header() {
  return (
    <header className="header fixed top-0 left-0 flex justify-evenly items-center h-10 min-h-[80px] w-full">
      <div className="logo w-[50px]">
        <img src={Logo} alt="Myntra Home" />
      </div>
      <nav className="header-nav bg-white h-[80px] w-[500px] flex justify-between items-center uppercase text-[14px]">
        <HeaderNav title="Men" />
        <HeaderNav title="Womens" />
        <HeaderNav title="Kids" />
        <HeaderNav title="Home & Living" />
        <HeaderNav title="Beauty" />
        <HeaderNav title="Studio" super="New" />
      </nav>
      <div className="search_bar min-w-[30%] flex items-center border-none bg-inputBG rounded-md">
        <SearchIcon className="pl-2" style={{ fontSize: "2rem" }} />
        <input
          type="text"
          placeholder="Search your brands and products"
          className="flex-grow px-[8px] py-[10px] border-none focus:outline-0 bg-inputBG rounded-r-md"
        />
      </div>
      <div className="actions flex justify-between w-[200px] bg-white !important">
        <div className="action-items flex flex-col items-center">
          <PersonOutlineIcon />
          Profile
        </div>
        <div className="action-items flex flex-col items-center">
          <FavoriteBorderIcon />
          WishList
        </div>
        <div className="action-items flex flex-col items-center">
          <WorkOutlineIcon />
          Bag
        </div>
      </div>
    </header>
  );
}

export default Header;
