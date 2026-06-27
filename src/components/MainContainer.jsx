import React from "react";
import Videotitle from "./Videotitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const moviesData = useSelector((store) => store.movies.nowPlayingMovies);
  // const d=useSelector((store)=>store.searchGptSlice.gptWindow)
  // console.log(d);
  
  
  if (!moviesData) return;
  // const randomNumber = Math.floor(Math.random() * (19 - 2 + 1)) + 2;
  const randomNumber=12

  const mainMovie = moviesData[randomNumber];
  const { title, overview } = mainMovie;


  return (
    <div className="relative aspect-video flex ">
      <Videotitle title={title} overview={overview} />
      <VideoBackground number={randomNumber} />
    </div>
  );
};

export default MainContainer;
