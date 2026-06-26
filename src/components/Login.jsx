import React, { useEffect, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { log } from "firebase/firestore/pipelines";
import { heroImage } from "../utils/constants";

const Login = () => {
  const [iscurrStateSignIn, setIsCurStateSignIn] = useState(true);
  const [errorMssg, setErrormssg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function stateChange(islogin) {
    if (islogin) {
      setIsCurStateSignIn(false);
    } else setIsCurStateSignIn(true);

    // console.log(islogin);
  }

  function login() {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value,
    )
      .then((usearcred) => {
        const user = usearcred.user;
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
        return updateProfile(user, { displayName: name.current.value }); // display name update
      })
      .then(() => {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
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
    <div className="relative h-screen w-full flex justify-center items-center">
      <Header />
      <img
        src={heroImage}
        alt="Hero image"
        className="bg-red-600 object-cover h-full w-full"
      />

      <form
        className="absolute z-50 p-6 md-p-10 bg-black/50  sm:w-1/4 my-auto mx-4 sm:m-auto  text-amber-50 rounded "
        onSubmit={(e) => handleSubmitForm(e)}
      >
        <h2 className="text-2xl text-white font-bold">
          {iscurrStateSignIn ? "Sign In" : "SIgnUp"}
        </h2>
        <div className="flex flex-col gap-4 mt-6 h-full">
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
