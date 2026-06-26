import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        moviestrailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPoupularMovies:(state ,action)=>{
            state.popularMovies=action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.moviestrailer=action.payload
        }
    }
})

export const {addNowPlayingMovies,addPoupularMovies,addMovieTrailer}=moviesSlice.actions

export default moviesSlice.reducer