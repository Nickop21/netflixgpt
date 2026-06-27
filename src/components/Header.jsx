import React, { useEffect, useState } from "react";
import netflixsvg from "../assets/netflix.svg";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import {isGptWindow,selectedLanguage} from "../store/searchGptSlice"
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const language=useSelector((store)=>store.searchGptSlice.language)
  const [loading, setLoading] = useState(true);
  // console.log(language);
  

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
    <div className="fixed top-0 z-90 bg-linear-to-b from-black/95 w-full p-8 flex justify-between">
      <img src={netflixsvg} alt="" className="w-32  netflix" />
      {user && (
        <div>
          <select className="text-white border-2 border-white rounded p-1 px-3 mr-4 bg-black" value={language} onChange={(e)=>dispatch(selectedLanguage(e.target.value))}>

          <option value="english" >English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>

          </select>
          <button className="p-2 px-4 bg-violet-900 hover:bg-violet-700 mr-4 rounded text-amber-50 font-bold text-sm" onClick={()=>dispatch(isGptWindow())}> GPT Search</button>

          <button
            className="p-2 px-4 rounded text-amber-50 font-bold bg-red-700 hover:bg-red-600 text-sm"
            onClick={() => signOutFn()}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
