import React from "react";
import "./StarRating.scss";

export const StarRating = ({ rating }) => {
  // Function to make the rating based on props and return the correct number of stars
  // For just now fecimal ratings are not supported eg 4.5

  let movieRating = Array.from({ length: Math.floor(rating) });

  return (
    <div className="StarRating">
      {movieRating.map((star) => (
        <i class="fas fa-star"></i>
      ))}
    </div>
  );
};

export default StarRating;
