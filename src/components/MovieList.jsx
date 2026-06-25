import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ categorary ,populateData }) => {
 console.log(populateData);
 
  return (
    <div className=" p-6">
      <div className="text-2xl font-bold">{categorary}</div>
      <div className="overflow-x-scroll flex scrollbar-none">
        <div className="flex flex-row gap-4">
          {populateData?.map((data, index) => {
            return (
              <MovieCard poster_path={data?.poster_path} title={data?.title} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
