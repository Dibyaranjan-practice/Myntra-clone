import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../images/myntra_logo.webp";
import HeaderNav from "./HeaderNav";
import { useSelector } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

function Header() {
  const cart = useSelector((store) => store.cart);
  const logInState = useSelector((store) => store.login);
  let cartLength = 0;
  for (let i = 0; i < cart.length; i++) {
    cartLength += cart[i].quantity;
  }
  let wishLength = useSelector((store) => store.watch.length);
  return (
    <header className="header fixed top-0 left-0 flex justify-evenly items-center h-10 min-h-[80px] w-full z-50">
      <div className="logo w-[50px]">
        <Link to="/">
          <img src={Logo} alt="Myntra Home" />
        </Link>
      </div>
      <nav className="header-nav bg-white h-[80px] w-[500px] flex justify-between items-center uppercase text-[14px] md:max-md:hidden">
        <HeaderNav title="Men" link="/men" />
        <HeaderNav title="Women" link="/women" />
        <HeaderNav title="Kids" link="/kids" />
        <HeaderNav title="Home & Living" link="/home_and_living" />
        <HeaderNav title="Beauty" link="/beauty" />
        <HeaderNav title="Studio" super="New" link="/studio" />
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
        <div className="action-items flex justify-center">
          {logInState.loggedIn ? (
            <Link to="/profile" className="flex flex-col items-center">
              <PersonOutlineIcon />
              {logInState.username}
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
        <div className="action-items flex flex-col items-center relative top-0 left-0">
          <Link to="/watchlist" className="flex flex-col items-center">
            <FavoriteBorderIcon />
            WishList
          </Link>
          {wishLength > 0 && (
            <div
              className="total_count flex justify-center items-center absolute right-0 -top-2 bg-super rounded-full h-[20px] w-[20px]"
              style={{ backgroundColor: "red", color: "white" }}
            >
              {wishLength}
            </div>
          )}
        </div>
        <div className="action-items flex flex-col items-center relative top-0 left-0">
          <Link to="/cart" className="flex flex-col">
            <WorkOutlineIcon />
            Bag
          </Link>
          {cartLength > 0 && (
            <div
              className="total_count flex justify-center items-center absolute right-0 -top-2 bg-super rounded-full h-[20px] w-[20px]"
              style={{ backgroundColor: "red", color: "white" }}
            >
              {cartLength}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
