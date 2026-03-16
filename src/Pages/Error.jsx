function Error() {
  return (
    <div className="flex flex-col items-center px-4">
      <div
        className="w-full max-w-xl bg-contain bg-center bg-no-repeat h-56 sm:h-64 md:h-80 lg:h-[400px]"
        style={{ backgroundImage: "url('/error.png')" }}
      ></div>

      <div className="w-full flex flex-col justify-center mt-10 items-center bg-white text-center">
        <p className="text-black font-black text-6xl sm:text-7xl md:text-8xl lg:text-[120px] tracking-wide">
          404!
        </p>

        <p className="font-bold font-[Inter] text-lg sm:text-xl md:text-2xl  text-stone-800">
          Page Not Found
        </p>

        <a href="/">
          <button className="text-white font-bold text-sm mt-8  bg-stone-800 rounded-xl p-2  hover:bg-stone-500">
            Go Home
          </button>
        </a>
      </div>
    </div>
  );
}

export default Error;
