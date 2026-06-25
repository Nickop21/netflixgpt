import React from "react";

const Videotitle = ({ title, overview }) => {
  // console.log(title,overview);

  return (
    <div className="relative w-screen xl:w-1/3  p-6 pt-[18%] z-20  bg-linear-to-r from-black ">
      <span className="font-extrabold text-xl sm:text-2xl lg:text-6xl text-white ">
        {title}
      </span>
      <p className="font-semibold  text-amber-50 my-4 text-justify text-sm  ">
        {overview}
      </p>
      <div className="flex gap-3">
        <button className="p-2 px-4 bg-red-600 rounded font-bold">
          {/* <span className="">▶</span> */}
          <span className="text-white">Play</span>
        </button>
        <button className="p-2 px-4 bg-gray-500 rounded font-bold">
          {/* <span className="">ℹ️</span> */}
          <span className="text-white">more info</span>
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
