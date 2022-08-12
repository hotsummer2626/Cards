import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./CardOne.module.scss";

const CardOne = ({ title, img, date, oldPrice, newPrice }) => {
  let backgroundImg = `url(${img})`;
  return (
    <div className={styles.container}>
      <div className={styles["color-background"]}></div>
      <div
        className={styles.img}
        style={{ backgroundImage: backgroundImg }}
      ></div>
      <div className={`${styles.icon} ${styles.icon__heart}`}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className={styles["card-info"]}>
        <div className={styles["card-info__title"]}>{title}</div>
        <div className={styles["card-info__date"]}>{date}</div>
        <div className={styles["card-info__price-group"]}>
          <div className={styles["card-info__price-group__old-price"]}>
            {oldPrice}
          </div>
          <div className={styles["card-info__price-group__new-price"]}>
            {newPrice}
          </div>
          <div className={`${styles.icon} ${styles.icon__cart}`}>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
