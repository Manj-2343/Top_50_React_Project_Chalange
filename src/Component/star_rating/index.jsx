import React from "react";
import "./index.css";
import { FaRegStar } from "react-icons/fa";

const StarRating = () => {
  return (
    <div>
      <div className="star">
        <FaRegStar size={50} />
      </div>
    </div>
  );
};

export default StarRating;
