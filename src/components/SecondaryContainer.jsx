import React from 'react'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.popularMovies);
  

  return (
    <div className='text-amber-50'>
      <div className='relative -mt-6 sm:-mt-20 lg:-mt-40 z-50'>

      <MovieList categorary={"Trending"} populateData={movies.nowPlayingMovies}/>
      <MovieList categorary={"Popular"} populateData={movies.popularMovies}/>
      <MovieList categorary={"Horror"} populateData={movies.nowPlayingMovies}/>

      </div>

    </div>
  )
}

export default SecondaryContainer