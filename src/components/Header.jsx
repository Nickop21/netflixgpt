import React, { useEffect, useState } from "react";
import netflixsvg from "../assets/netflix.svg";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    setLoading(false);
    return () => unubscribe();
  }, []);

  function signOutFn() {
    signOut(auth)
      .then((result) => {
        // dispatch(removeUser());
        navigate("/");
      })
      .catch((err) => {
        alert("something went wrong");
      });
  }

  return (
    <div className="absolute z-30 bg-linear-to-b from-black/75 w-full p-8 flex justify-between">
      <img src={netflixsvg} alt="" className="w-32  netflix" />
      {user && (
        <button
          className="p-2 px-4 rounded text-amber-50 font-bold bg-red-700 hover:bg-red-600"
          onClick={() => signOutFn()}
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default Header;
