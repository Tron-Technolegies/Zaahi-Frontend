import { CiLocationArrow1 } from "react-icons/ci";

const NewsLetter = () => {
  return (
    <div className="flex flex-col  md:p-25 p-5 gap-3 items-center justify-center ">
      <p className="text-sm">STAY CONNECTED</p>
      <p className="font-[Bastoni] text-center text-3xl">
        Join Our Inner Circle
      </p>
      <p className="text-[#848484] text-center text-[12px]">
        Be the first to know about new acquisitions, private sales, and
        exclusive events.
      </p>
      <div className="flex md:flex-row flex-col gap-2">
        <a
          href="https://chat.whatsapp.com/EurJVZmIYrz2HRXf0lI8mW"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#D47784] text-[#D47784] px-6 py-2 flex gap-2 justify-center items-center  font-medium hover:bg-[#D47784] hover:text-white transition duration-300 "
        >
          <CiLocationArrow1 size={20} /> Join
        </a>
      </div>
      <p className="text-[#848484] text-[10px]">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates.
      </p>
    </div>
  );
};

export default NewsLetter;
