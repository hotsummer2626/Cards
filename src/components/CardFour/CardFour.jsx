import React from "react";
import styles from "./CardFour.module.scss";

const CardFour = ({ title, img }) => {
  return (
    <div className={styles.container}>
      <div className={styles.productBx}>
        <img src={img} alt="nike shoes" />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.contentBx}>
        <div className={styles.size}>
          <div className={styles.subtitle}>size:</div>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
        </div>
        <div className={styles.color}>
          <div className={styles.subtitle}>color:</div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="#" className={styles.button}>
          buy now
        </a>
      </div>
    </div>
  );
};

export default CardFour;
