import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

function SignUp() {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const confpassRef = useRef(null);
  const submitHandler = (event) => {
    event.preventDefault();
    if (passRef.current.value !== confpassRef.current.value) {
      toast.error("Password and confirm password doesn't match");
    } else {
    }
  };
  return (
    <React.Fragment>
      <form
        onSubmit={submitHandler}
        className="fixed flex flex-col justify-center items-center top-0 left-0 h-[100vh] w-[100vw] bg-slate-50"
      >
        <div className="form_container flex flex-col justify-center items-between outline outline-1 outline-slate-600 p-6 bg-white">
          <div className="input_container p-2 flex justify-between">
            <label htmlFor="firstname" className="p-2">
              firstname
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="enter your firstname here"
              ref={firstnameRef}
              required
            />
          </div>
          <div className="input_container p-2 flex justify-between">
            <label htmlFor="lastname" className="p-2 ">
              lastname
            </label>
            <input
              type="lastname"
              name="lastname"
              placeholder="enter your lastname here"
              ref={lastnameRef}
              required
            />
          </div>
          <div className="input_container p-2 flex justify-between">
            <label htmlFor="email" className="p-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter your email here"
              ref={emailRef}
              required
            />
          </div>
          <div className="input_container p-2 flex justify-between">
            <label htmlFor="confirmpassword" className="p-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="enter your password here"
              ref={confpassRef}
              required
            />
          </div>
          <div className="input_container p-2 flex justify-between">
            <label htmlFor="password" className="p-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter your password here"
              ref={passRef}
              required
            />
          </div>
          <button type="submit">SignUp</button>
          <div>
            Already Have an account? <Link to="/login">LogIn</Link>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SignUp;
