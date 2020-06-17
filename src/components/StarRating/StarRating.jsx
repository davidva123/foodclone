import React from "react";
import "./StarRating.scss";

export const StarRating = ({ rating,likes }) => {
  // Function to make the rating based on props and return the correct number of stars
  // For just now fecimal ratings are not supported eg 4.5

  let movieRating = Array.from({ length: Math.floor(rating) });

  return (

    
    <div className="StarRating row">
  
      <div className="col col-lg-8">
        {movieRating.map((star, i) => (
          <i key={`star-${i}`} className="fas fa-star"></i>
        ))} <span className="StarRating-likes">({likes})</span>
      </div>
    </div>
  );
};

export default StarRating;
