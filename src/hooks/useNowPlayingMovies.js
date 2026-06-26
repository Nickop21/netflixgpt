import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addNowPlayingMovies } from "../store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      api_options,
    );
    const movieJson = await data.json();
    // console.log(movieJson.results);
    
    dispatch(addNowPlayingMovies(movieJson.results));

  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

};

export default useNowPlayingMovies;
