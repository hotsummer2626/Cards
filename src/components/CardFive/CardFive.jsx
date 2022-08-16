import React, { useState, useEffect } from "react";
import styles from "./CardFive.module.scss";
import a2Logo from "../../assets/a2_logo.png";

const CardFive = ({ formulaInfo }) => {
  const [currentImg, setCurrentImg] = useState(`url(${a2Logo})`);
  const [currentProduct, setCurrentProduct] = useState(formulaInfo[0]);

  const handleOnClickChange = (formula) => {
    setCurrentImg(`url(${formula.img})`);
    setCurrentProduct(formula);
  };
  return (
    <div
      className={styles.container}
      onMouseLeave={() => setCurrentImg(`url(${a2Logo})`)}
      onMouseEnter={() => setCurrentImg(`url(${currentProduct.img})`)}
    >
      <div
        className={styles.imgBx}
        style={{ backgroundImage: currentImg }}
      ></div>
      <div className={styles.contentBx}>
        <h2 className={styles.title}>{currentProduct.title}</h2>
        <h4>Baby Formula</h4>
        <div className={styles.details}>
          <h3>product details</h3>
          <div className={styles.description}>{currentProduct.description}</div>
        </div>
        <div className={styles.stages}>
          <h3>stage</h3>
          <div className={styles.items}>
            {formulaInfo.map((formula) => (
              <span
                className={
                  currentProduct.stage === formula.stage
                    ? `${styles.highlight}`
                    : ""
                }
                onClick={() => handleOnClickChange(formula)}
              >
                {formula.stage}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.price}>
          <span className={styles.moneySymbol}>$</span>
          {currentProduct.price}
        </div>
        <a href="#" className={styles.button}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default CardFive;
