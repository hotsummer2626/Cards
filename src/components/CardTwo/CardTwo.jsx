import React from "react";
import styles from "./CardTwo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CardTwo = ({
  title,
  img,
  description,
  newPrice,
  satisfaction,
  setCurrentCardInfo,
}) => {
  let backgroundImg = `url(${img})`;
  return (
    <div className={styles.container}>
      <div
        className={styles.img}
        style={{ backgroundImage: backgroundImg }}
      ></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.price}>{newPrice}</div>
      <ul className={styles["icon__star-group"]}>
        {[1, 2, 3, 4, 5].map((param, index) =>
          param <= satisfaction ? (
            <li
              className={`${styles["icon__star-group__star"]} ${styles.checked}`}
              key={index}
              onClick={() =>
                setCurrentCardInfo((prevCardInfo) => ({
                  ...prevCardInfo,
                  satisfaction: param,
                }))
              }
            >
              <FontAwesomeIcon icon={faStar} />
            </li>
          ) : (
            <li
              className={styles["icon__star-group__star"]}
              key={index}
              onClick={() =>
                setCurrentCardInfo((prevCardInfo) => ({
                  ...prevCardInfo,
                  satisfaction: param,
                }))
              }
            >
              <FontAwesomeIcon icon={faStar} />
            </li>
          )
        )}
      </ul>
      <div className={styles.button}>Buy Now</div>
    </div>
  );
};

export default CardTwo;
