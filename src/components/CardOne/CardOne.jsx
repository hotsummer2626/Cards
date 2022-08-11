import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CardOne.scss";

const CardOne = ({ title, img, date, oldPrice, newPrice }) => {
  let backgroundImg = `url(${img})`;
  return (
    <div className="container">
      <div className="color-background"></div>
      <div className="img" style={{ backgroundImage: backgroundImg }}></div>
      <div className="icon icon__heart">
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="card-info">
        <div className="card-info__name">{title}</div>
        <div className="card-info__date">{date}</div>
        <div className="card-info__price-group">
          <div className="card-info__price-group__old-price">{oldPrice}</div>
          <div className="card-info__price-group__new-price">{newPrice}</div>
          <div className="icon icon__cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
