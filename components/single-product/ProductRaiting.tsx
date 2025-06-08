import React from "react";
import { FaStar } from "react-icons/fa";

const ProductRaiting = ({ phoneId }: { phoneId: string }) => {
  const rating = 4.2;
  const reviews = 42;
  const reviewsText = `(${reviews}) Reviews`;
  return (
    <span className="flex gap-1 items-center text-md mb-4">
      <FaStar className="w-3 h-3" />
      {rating} {reviewsText}
    </span>
  );
};

export default ProductRaiting;
