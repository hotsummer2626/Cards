import React, { useState } from "react";
import styles from "./CardFive.module.scss";

const CardFive = ({ brand, formulaInfo }) => {
  const [currentImg, setCurrentImg] = useState(`url(${brand.logo})`);
  const [currentProduct, setCurrentProduct] = useState(formulaInfo[0]);

  const handleOnClickChange = (formula) => {
    setCurrentImg(`url(${formula.img})`);
    setCurrentProduct(formula);
  };

  return (
    <div
      className={styles.container}
      onMouseLeave={() => setCurrentImg(`url(${brand.logo})`)}
      onMouseEnter={() => setCurrentImg(`url(${currentProduct.img})`)}
    >
      <div
        className={styles.imgBx}
        style={{ backgroundImage: currentImg }}
      ></div>
      <div className={`${styles.contentBx} ${styles[brand.name]}`}>
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
                className={`${styles[brand.name]} ${
                  currentProduct.stage === formula.stage ? styles.highlight : ""
                }`}
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
        <a href="#" className={`${styles.button} ${styles[brand.name]}`}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default CardFive;
