import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./../utils/slices/loginSlice";

function Profile() {
  const loginState = useSelector((store) => store.login);
  const history = useNavigate();
  const dispatch = useDispatch();
  if (!loginState.loggedIn) {
    console.log(loginState);
    history("/login");
  }
  return (
    <div className="mt-[100px]">
      {loginState.loggedIn ? (
        <div
          onClick={() => {
            dispatch(logout());
          }}
          className="logout"
        >
          Logout
        </div>
      ) : (
        history("/login")
      )}
    </div>
  );
}

export default Profile;
