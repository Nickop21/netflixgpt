import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useDispatch, useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import movie from "../utils/movie.json"
import { addNowPlayingMovies } from "../store/moviesSlice";


const Browse = () => {
  const dispatch=useDispatch()
  // useNowPlayingMovies()
      dispatch(addNowPlayingMovies(movie));
  
  return (
    <div>
      <Header />
      <MainContainer/>
      {/* <SecondaryContainer/> */}
    </div>
  );
};

export default Browse;
