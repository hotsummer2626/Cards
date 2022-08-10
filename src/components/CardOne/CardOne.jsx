import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CardOne.scss";

const CardOne = () => {
  return (
    <div className="container">
      <div className="color-background"></div>
      <div className="img"></div>
      <div className="icon icon__heart">
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="card-info">
        <div className="card-info__name">Batman</div>
        <div className="card-info__date">25-10-2020</div>
        <div className="card-info__price-group">
          <div className="card-info__price-group__old-price">$20000</div>
          <div className="card-info__price-group__new-price">$9999</div>
          <div className="icon icon__cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
