import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const ToggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>
      <form className=" w-[30%] absolute p-12 bg-black my-24 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl p-3 text-center">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full  bg-gray-700"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="px-2 cursor-pointer" onClick={ToggleSignInForm}>
          {IsSignInForm
            ? " New to Netflix ? Signup now"
            : "Already Registered?.Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
