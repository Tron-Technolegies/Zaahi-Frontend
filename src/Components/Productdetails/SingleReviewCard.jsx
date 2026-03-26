import React, { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";

export default function SingleReviewCard({ review }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2 py-5 border-t">
      <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 sm:items-center items-start">
        <div className="flex gap-1 items-center sm:border-e sm:pe-4">
          <p className="bg-[#D77C84] rounded-full w-7 h-7 flex justify-center items-center text-white">
            {review?.user?.username?.slice(0, 1).toUpperCase()}
          </p>
          <p>{review?.user?.username}</p>
        </div>
      </div>

      <p>{new Date(review?.createdAt).toLocaleString()}</p>

      {/* ⭐ Stars */}
      <div className="flex gap-1">
        {Array.from({ length: review?.rating }).map((_, index) => (
          <FaStar key={index} className="text-[#FFB800]" />
        ))}
        {review?.rating < 5 &&
          Array.from({ length: 5 - review?.rating }).map((_, index) => (
            <FaStar key={`empty-${index}`} className="text-[#DADADA]" />
          ))}
      </div>

      <p>{review?.review}</p>

      {/* 🖼 Thumbnail */}
      {review?.image?.url && (
        <img
          src={review.image.url}
          alt="review"
          onClick={() => setShowImage(true)}
          className="w-20 h-20 object-cover rounded-md cursor-pointer hover:scale-105 transition"
        />
      )}

      {/* 🔥 FULLSCREEN MODAL */}
      {showImage && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          {/* Close Button */}
          <button
            onClick={() => setShowImage(false)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            <FaTimes />
          </button>

          {/* Image */}
          <img
            src={review.image.url}
            alt="full"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
