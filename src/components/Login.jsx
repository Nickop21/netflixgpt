import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative h-150 w-full">
      <div className="absolute z-30 inset-0 p-6 bg-linear-to-b from-black/75  ">
        <Header />
      </div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_small.jpg"
        alt=""
        className="bg-red-600 object-cover h-full w-full"
      />
      {/* <div className="absolute mx-auto "></div> */}
      <form className="absolute inset-0 z-50 p-8 bg-black/50 h-2/3 w-1/3 m-auto text-amber-50 rounded">
        <h2 className="text-2xl text-white font-bold">Sign In</h2>
        <div className="flex flex-col gap-6 mt-6">
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 bg-gray-800 w-full rounded"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-2 bg-gray-800 w-full rounded"
          />
          <button className="bg-red-600 p-2 rounded cursor-pointer">
            SignIn
          </button>
          <div className="text-white font-bold ">
            <span>New to Netflix? </span>
            <span className="hover:underline cursor-pointer">Sign Up Now</span>
          </div>
        </div>
      </form>
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/30"></div>
    </div>
  );
};

export default Login;
