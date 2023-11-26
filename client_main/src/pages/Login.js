import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import KeyIcon from "@mui/icons-material/Key";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "./../utils/slices/loginSlice";

function Login() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const submitHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/client/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "success") {
          dispatch(
            login({
              email: emailRef.current.value,
              username: "Dibya",
              jwt: res.token,
            })
          );
          toast.success("Logged In");
          history("/");
        } else {
          toast.error("Login failed");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <React.Fragment>
      <form
        onSubmit={submitHandler}
        className="fixed flex flex-col justify-center items-center top-0 left-0 h-[100vh] w-[100vw] bg-slate-50"
      >
        <div className="form_container flex flex-col justify-center items-center outline outline-1 outline-slate-600 p-6 bg-white">
          <div className="input_container p-2 border-">
            <label htmlFor="email">
              <PersonOutlineIcon />
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter your email here"
              ref={emailRef}
              required
            />
          </div>
          <div className="input_container p-2">
            <label htmlFor="password">
              <KeyIcon />
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter your password here"
              ref={passRef}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div>
            New User? <Link to="/signup">SignUp</Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Login;
