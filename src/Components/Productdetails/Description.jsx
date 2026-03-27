const Description = ({ setCurrent, current }) => {
  return (
    <div className="max-w-6xl mx-auto mt-40 px-4">
      <div className="flex gap-10 border-b border-[#DADADA]">
        <button
          onClick={() => setCurrent("description")}
          className={`pb-3 font-semibold cursor-pointer
            ${current === "description" ? "text-black border-b-2 border-black" : "text-[#777777] hover:text-black"}`}
        >
          DESCRIPTION
        </button>

        <button
          onClick={() => setCurrent("specs")}
          className={`pb-3 font-semibold cursor-pointer
            ${current === "specs" ? "text-black border-b-2 border-black" : "text-[#777777] hover:text-black"}`}
        >
          SPECIFICATIONS
        </button>

        <button
          onClick={() => {
            setCurrent("review");
          }}
          className={`pb-3 font-semibold cursor-pointer
            ${current === "review" ? "text-black border-b-2 border-black" : "text-[#777777] hover:text-black"}`}
        >
          REVIEWS
        </button>
      </div>
    </div>
  );
};

export default Description;
