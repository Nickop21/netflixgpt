import React from 'react'
import { api_options, backDropMainUrl } from '../utils/constants';
import { useSelector } from 'react-redux';
import nowPlayingMovies from '../store/moviesSlice'
const MovieCard = ({poster_path ,title}) => {

const movies=useSelector((store)=>store.movies.nowPlayingMovies)
  return (
    <div className='w-32 lg:w-40 rounded  mt-4 '>
        <img src={`${backDropMainUrl}${poster_path}`} alt={title}/>
    </div>
  )
}

export default MovieCard