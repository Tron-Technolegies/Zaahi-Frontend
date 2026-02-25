import React from "react";

function Error() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div
        className="w-1/2 bg-cover  h-full"
        style={{ backgroundImage: "url('/error.png')" }}
      ></div>

      <div className="w-1/2 flex flex-col justify-center items-center bg-white relative">
        <p className="text-stone-700 font-black text-[150px] ">404</p>
        <p className="font-bold text-3xl text-gray-800">I'm a bit Lost Here!</p>
        <a href="/dashboard">
          <button className="text-white font-bold text-md mt-20 bg-stone-800 rounded-xl p-3 hover:bg-stone-500 hover:scale-105 duration-800 ease-in-out">
            Go Home
          </button>
        </a>
      </div>
    </div>
  );
}

export default Error;
