import React from "react";
import "./Card_1.scss";

const Card_1 = () => {
  return (
    <div className="container">
      <div className="color-background"></div>
      <div className="img"></div>
      <div className="card-info">
        <div className="card-info__name">Batman</div>
        <div className="card-info__date">25-10-2020</div>
        <div className="card-info__price">$9999</div>
      </div>
    </div>
  );
};

export default Card_1;
