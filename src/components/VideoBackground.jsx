import React from "react";
import { useSelector } from "react-redux";
import useTrailerMovies from "../hooks/useTrailerMovies";

const VideoBackground = ({number}) => {
  useTrailerMovies(number);
  const videoKey = useSelector((store) => store.movies.moviestrailer);

  return (
    <div className="absolute -z-10 w-full ">
      {videoKey && (
        <iframe
          className="w-full pointer-events-none aspect-video  "
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}`}
          title="YouTube video player"
          
          allow="autoplay"
        />
      )}
    </div>
  );
};

export default VideoBackground;
