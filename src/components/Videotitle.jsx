import React from "react";

const Videotitle = ({ title, overview }) => {
  // console.log(title,overview);

  return (
    <div className="w-1/3  p-6 pt-46 z-50  bg-linear-to-r from-black ">
        <span className="font-extrabold text-2xl md:text-4xl text-white ">
          {title}
        </span>
      <p className="font-bold  text-amber-50 my-4 text-justify">{overview}</p>
      <div className="flex gap-3">
        <button className="p-2 px-4 bg-white rounded font-bold">
          <span className="">▶</span>
          <span>Play</span>
        </button>
        <button className="p-2 px-4 bg-gray-200 rounded font-bold">
          <span className="">ℹ️</span>
          <span>more info</span>
        </button>
      </div>

    </div>
  );
};

export default Videotitle;
