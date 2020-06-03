import React from "react";
import "./StarRating.scss";

export const StarRating = ({ rating }) => {
  // Function to make the rating based on props and return the correct number of stars
  // For just now fecimal ratings are not supported eg 4.5

  let movieRating = Array.from({ length: Math.floor(rating) });

  return (
    <div className="StarRating row justify-content-md-center">
      <div className="col col-lg-5">
        {movieRating.map((star, i) => (
          <i key={`star-${i}`} className="fas fa-star"></i>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
