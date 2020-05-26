import React from "react";
import "./CookTime.scss";

export const CookTime = ({ cookTime }) => {
  return (
    <div className="CookTime row justify-content-md-center">
      <div className="col col-lg-5">
        <i class="fas fa-clock">{cookTime}</i>
      </div>
    </div>
  );
};

export default CookTime;
