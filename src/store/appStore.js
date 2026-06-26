import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchGptReducer  from "./searchGptSlice"


const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies:moviesReducer,
    searchGptSlice:searchGptReducer
  },
});

export default appStore;
