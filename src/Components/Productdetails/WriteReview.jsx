import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { FaRegStar, FaStar } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { useAddReview } from "../../hooks/review/useReview";
import toast from "react-hot-toast";
import { UserContext } from "../../UserContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  maxHeight: 500,
  overflowY: "scroll",
  p: 4,
};

export default function WriteReview({
  open,
  handleClose,
  productId,
  setAllReviews,
}) {
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");
  const { isPending, mutateAsync } = useAddReview();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
    };
  }, [image]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Write a review
        </Typography>
        <form
          className="flex flex-col gap-2 mt-5"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!currentUser) {
              toast.error("Please Login to write a review");
              return;
            }
            if (rating === 0) {
              toast.error("please give a rating");
              return;
            }
            const formData = new FormData(e.target);
            formData.append("rating", rating);
            formData.append("productId", productId);
            await mutateAsync(formData);
            e.target.reset();
            setImage("");
            setRating(0);
            handleClose();
          }}
        >
          <label className="font-medium text-xs">
            How would You Rate Our Product ?
          </label>
          <div className="flex gap-5 justify-center my-5">
            <button
              type="button"
              className="hover:scale-150 duration-200 ease-in-out text-[#FFB800]"
              onClick={() => setRating(1)}
            >
              {rating < 1 ? <FaRegStar /> : <FaStar />}
            </button>
            <button
              type="button"
              className="hover:scale-150 duration-200 ease-in-out text-[#FFB800]"
              onClick={() => setRating(2)}
            >
              {rating < 2 ? <FaRegStar /> : <FaStar />}
            </button>
            <button
              type="button"
              className="hover:scale-150 duration-200 ease-in-out text-[#FFB800]"
              onClick={() => setRating(3)}
            >
              {rating < 3 ? <FaRegStar /> : <FaStar />}
            </button>
            <button
              type="button"
              className="hover:scale-150 duration-200 ease-in-out text-[#FFB800]"
              onClick={() => setRating(4)}
            >
              {rating < 4 ? <FaRegStar /> : <FaStar />}
            </button>
            <button
              type="button"
              className="hover:scale-150 duration-200 ease-in-out text-[#FFB800]"
              onClick={() => setRating(5)}
            >
              {rating < 5 ? <FaRegStar /> : <FaStar />}
            </button>
          </div>
          <label className="text-xs font-medium">Write about the product</label>
          <textarea
            className="bg-[#F6F6F6] rounded-md outline-none w-full p-3"
            rows={5}
            name="review"
            required
            placeholder="write your review here"
          ></textarea>
          <div className="">
            <h4 className="text-xs font-medium mb-2">Add an Image</h4>
            <label
              className={`flex flex-col gap-2 justify-center border w-fit items-center p-3 rounded-lg border-blue-500 cursor-pointer hover:bg-blue-700 nav-link hover:text-white `}
            >
              <input
                type="file"
                className="hidden"
                accept="image/*"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                multiple={false}
              />
              <div className="text-xl">
                <BsUpload />
              </div>
              <p>Upload</p>
            </label>
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="w-24 h-24 my-3 object-cover rounded-md"
              />
            )}
          </div>
          <button
            disabled={isPending}
            className="px-4 py-2 bg-black rounded-lg text-white border-2 hover:bg-white hover:text-black shadow-md"
          >
            {isPending ? "Submitting.." : "Submit Review"}
          </button>
        </form>
      </Box>
    </Modal>
  );
}
