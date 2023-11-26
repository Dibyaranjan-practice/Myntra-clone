import React from "react";
import { NavLink } from "react-router-dom";

function HeaderNav(props) {
  return (
    <NavLink to={props.link} className="font-bold text-nav-color">
      {props.title}
      {props.super && <sup className="text-super">{props.super}</sup>}
    </NavLink>
  );
}

export default HeaderNav;
