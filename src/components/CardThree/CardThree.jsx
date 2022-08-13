import React from "react";
import styles from "./CardThree.module.scss";

const CardThree = ({ title, img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBx}>
        <img src={img}></img>
      </div>
      <div className={styles.contentBx}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.size}>
          <h3 className={styles.subtitle}>Size:</h3>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div className={styles.color}>
          <h3 className={styles.subtitle}>Color:</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="#" className={styles.button}>Buy Now</a>
      </div>
    </div>
  );
};

export default CardThree;
