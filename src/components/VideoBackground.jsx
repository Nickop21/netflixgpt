import React from "react";
import { useSelector } from "react-redux";
import useTrailerMovies from "../hooks/useTrailerMovies";

const VideoBackground = () => {
  useTrailerMovies();
  const videoKey = useSelector((store) => store.movies.moviestrailer);

  return (
    <div className="h-full absolute inset-0 -z-10">
      {videoKey && (
        <iframe
          className="w-screen pointer-events-none aspect-video  "
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
        />
      )}
    </div>
  );
};

export default VideoBackground;
