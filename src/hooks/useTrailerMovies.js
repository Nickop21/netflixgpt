import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../store/moviesSlice'
import { api_options } from '../utils/constants';

const useTrailerMovies = (number) => {
  const vidData = useSelector((store) => store.movies.nowPlayingMovies);
  const dispatch=useDispatch()

  async function movieVideo() {
    if (!vidData?.length) return;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${vidData[number].id}/videos?language=en-US`,
      api_options,
    );
    const json = await data.json();
    // console.log(json.results.filter((video) => video.type == "Teaser"));
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // setVideoKey(trailer.key);
    dispatch(addMovieTrailer(trailer.key))
  }
  useEffect(() => {
    movieVideo();
  }, []);
}

export default useTrailerMovies