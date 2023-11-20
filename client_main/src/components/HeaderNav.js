import React from "react";
import { Link } from "react-router-dom";

function HeaderNav(props) {
  return (
    <Link to={props.link} className="font-bold text-nav-color">
      {props.title}
      {props.super && <sup className="text-super">{props.super}</sup>}
    </Link>
  );
}

export default HeaderNav;
