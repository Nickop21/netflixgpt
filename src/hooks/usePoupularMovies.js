import React from 'react'
import { api_options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPoupularMovies } from '../store/moviesSlice'

const usePoupularMovies = async() => {
    const dispatch=useDispatch()
  
    const popular=await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', api_options)
    const json=await popular.json()
    // console.log(json);
    
    dispatch(addPoupularMovies(json.results))
}

export default usePoupularMovies