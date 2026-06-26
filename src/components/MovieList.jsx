import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ categorary, populateData }) => {
  //  console.log(populateData);

  // if (populateData) {

  //   console.log(populateData[2].known_for[0].poster_path)
  // }

  return (
    <div className=" p-6">
      <div className="text-2xl font-bold">{categorary}</div>
      <div className="overflow-x-scroll flex scrollbar-none">
        <div className="flex flex-row gap-4">
          {populateData?.map((data, index) => {
            {
            return  data?.poster_path ? (
                <MovieCard
                  poster_path={data?.poster_path}
                  title={data?.title}
                  key={index}
                />
              ) : (
                <MovieCard
                  poster_path={data?.known_for[1]?.poster_path}
                  title={data?.title}
                  key={index}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
