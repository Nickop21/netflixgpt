import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies()
  
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
