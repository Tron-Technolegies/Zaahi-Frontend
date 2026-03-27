import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewGraphElt from "./ReviewGraphElt";
import { useGetReview } from "../../hooks/review/useReview";
import Loading from "../Loading";
import WriteReview from "./WriteReview";
import SingleReviewCard from "./SingleReviewCard";

export default function ReviewSection({ product }) {
  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [allReviews, setAllReviews] = useState([]);
  //   const [oneStar, setOneStar] = useState(0);
  //   const [twoStar, setTwoStar] = useState(0);
  //   const [threeStar, setThreeStar] = useState(0);
  //   const [fourStar, setFourStar] = useState(0);
  //   const [fiveStar, setFiveStar] = useState(0);

  const { isLoading, isError, data, error } = useGetReview({
    productId: product?._id,
    currentPage,
  });

  useEffect(() => {
    if (data?.reviews) {
      setAllReviews((prev) => [...prev, ...data.reviews]);
    }
  }, [data]);

  //   useEffect(() => {
  //     if (reviews) {
  //       setOneStar(reviews.filter((item) => item.rating === 1));
  //       setTwoStar(reviews.filter((item) => item.rating === 2));
  //       setThreeStar(reviews.filter((item) => item.rating === 3));
  //       setFourStar(reviews.filter((item) => item.rating === 4));
  //       setFiveStar(reviews.filter((item) => item.rating === 5));
  //     }
  //   }, [reviews]);
  return (
    <>
      <div className=" py-10 px-5 w-full">
        <div className="flex justify-between flex-col shadow-lg px-10 py-5 rounded-md border">
          <div className=" w-full">
            <p className="text-xl font-semibold my-5">
              Product Ratings & Reviews
            </p>
            <p className="font-medium mb-10">
              Have a review about this product?
              <span
                onClick={() => {
                  setShowPopup(true);
                  setAllReviews([]);
                  setCurrentPage(1);
                }}
                className="text-[#4069D8] cursor-pointer"
              >
                {" "}
                Write here
              </span>
            </p>
            {isLoading ? (
              <Loading />
            ) : isError ? (
              <p>{error.message}</p>
            ) : data.reviews?.length > 0 ? (
              <div className="flex flex-col gap-2">
                <h5 className="text-3xl font-bold">
                  {product?.rating?.toFixed(1)}
                </h5>
                <div className="flex gap-1">
                  {Array.from({ length: Math.round(product?.rating) }).map(
                    (_, index) => (
                      <p key={index} className="text-[#FFB800]">
                        <FaStar />
                      </p>
                    ),
                  )}
                  {product?.rating < 5 &&
                    Array.from({ length: 5 - Math.round(product?.rating) }).map(
                      (_, index) => (
                        <p key={index} className="text-[#DADADA]">
                          <FaStar />
                        </p>
                      ),
                    )}
                </div>
                <p className="text-[#A7A7A7]">
                  Based on {product.totalReviews} reviews
                </p>
                <div>
                  <ReviewGraphElt
                    no={5}
                    percent={(
                      (data.breakdown?.fiveStar / data.total) *
                      100
                    ).toFixed(1)}
                  />
                  <ReviewGraphElt
                    no={4}
                    percent={(
                      (data.breakdown?.fourStar / data.total) *
                      100
                    ).toFixed(1)}
                  />
                  <ReviewGraphElt
                    no={3}
                    percent={(
                      (data.breakdown?.threeStar / data.total) *
                      100
                    ).toFixed(1)}
                  />
                  <ReviewGraphElt
                    no={2}
                    percent={(
                      (data.breakdown?.twoStar / data.total) *
                      100
                    ).toFixed(1)}
                  />
                  <ReviewGraphElt
                    no={1}
                    percent={(
                      (data.breakdown?.oneStar / data.total) *
                      100
                    ).toFixed(1)}
                  />
                </div>
              </div>
            ) : (
              <p>No Reviews Yet</p>
            )}
          </div>
          <div className="grow w-full">
            <h4 className="text-xl font-semibold my-5">
              {data?.total} reviews
            </h4>
            <div>
              {allReviews?.map((item) => (
                <SingleReviewCard key={item.id} review={item} />
              ))}
            </div>
          </div>
          {data?.hasMore && (
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="mt-5 px-4 py-2 bg-black text-white rounded"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      <WriteReview
        open={showPopup}
        handleClose={() => setShowPopup(false)}
        productId={product?._id}
        setAllReviews={setAllReviews}
      />
    </>
  );
}
