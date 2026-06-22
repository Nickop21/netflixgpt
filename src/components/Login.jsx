import React, { useEffect, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [iscurrStateSignIn, setIsCurStateSignIn] = useState(true);
  const [errorMssg, setErrormssg] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function stateChange(islogin) {
    if (islogin) {
      setIsCurStateSignIn(false);
    } else setIsCurStateSignIn(true);

    console.log(islogin);
  }

  function login() {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value,
    )
      .then((usearcred) => {
        const user = usearcred.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormssg(errorCode + "-" + errorMessage);
      });
  }
  function SignUp() {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value,
    )
      .then((usearcred) => {
        const user = usearcred.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormssg(errorCode + "-" + errorMessage);
      });
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    if (
      email.current.value.trim() !== "" &&
      password.current.value.trim() !== ""
    ) {
      const err = checkValidate(email.current.value, password.current.value);

      setErrormssg(err);

      if (err == null) {
        if (!iscurrStateSignIn) {
          SignUp();
        } else {
          login();
        }
      }
      console.log(email.current.value);
    }
  }
  return (
    <div className="relative h-154 w-full">
      <div className="absolute z-30 inset-0 p-6 bg-linear-to-b from-black/75  ">
        <Header />
      </div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_small.jpg"
        alt="bgImage"
        className="bg-red-600 object-cover h-full w-full"
      />

      <form
        className="absolute inset-0 z-50 p-6 md-p-10 bg-black/50 h-2/3 sm:w-1/2 md:w-1/3 my-auto mx-4 sm:m-auto  text-amber-50 rounded "
        onSubmit={(e) => handleSubmitForm(e)}
      >
        <h2 className="text-2xl text-white font-bold">
          {iscurrStateSignIn ? "Sign In" : "SIgnUp"}
        </h2>
        <div className="flex flex-col gap-4 mt-6">
          {!iscurrStateSignIn && (
            <input
              type="text"
              ref={name}
              placeholder="Name"
              className="p-2 bg-gray-800 w-full rounded border-none  outline-amber-700"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-2 bg-gray-800 w-full rounded border-none  outline-amber-700"
          />
          <input
            type="text"
            ref={password}
            placeholder="Password"
            className="p-2 bg-gray-800 w-full rounded"
          />
          {errorMssg && <span className="text-red-500 text-">{errorMssg}</span>}
          <button
            className="bg-red-700 p-2 rounded cursor-pointer mt-4"
            type="submit"
          >
            {iscurrStateSignIn ? "SignIn" : "SignUP"}
          </button>

          {iscurrStateSignIn ? (
            <div className="text-white font-bold ">
              <span>
                {iscurrStateSignIn ? "New to Netflix" : "Already a user"} ?{" "}
              </span>
              <span
                className="hover:underline cursor-pointer"
                onClick={() => stateChange(true)}
              >
                Sign Up Now
              </span>
            </div>
          ) : (
            <div className="text-white font-bold ">
              <span>Already registered? </span>
              <span
                className="hover:underline cursor-pointer"
                onClick={() => stateChange(false)}
              >
                Sign In
              </span>
            </div>
          )}
        </div>
      </form>

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/30"></div>
    </div>
  );
};

export default Login;
