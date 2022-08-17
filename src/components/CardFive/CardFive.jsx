import React, { useState } from "react";
import styles from "./CardFive.module.scss";

const CardFive = ({brandImg, formulaInfo, themeColor }) => {
  const [currentImg, setCurrentImg] = useState(`url(${brandImg})`);
  const [currentProduct, setCurrentProduct] = useState(formulaInfo[0]);
  const [highlightStage, setHighlightStage] = useState("");
  const [isButtonHover, setIsButtonHover] = useState(false);

  const handleOnClickChange = (formula) => {
    setCurrentImg(`url(${formula.img})`);
    setCurrentProduct(formula);
  };

  return (
    <div
      className={styles.container}
      onMouseLeave={() => setCurrentImg(`url(${brandImg})`)}
      onMouseEnter={() => setCurrentImg(`url(${currentProduct.img})`)}
    >
      <div
        className={styles.imgBx}
        style={{ backgroundImage: currentImg }}
      ></div>
      <div className={styles.contentBx} style={{ background: `${themeColor}` }}>
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
                style={
                  currentProduct.stage === formula.stage ||
                  highlightStage === formula.stage
                    ? { color: `${themeColor}`, background: "#fff" }
                    : {}
                }
                onMouseEnter={() => setHighlightStage(formula.stage)}
                onMouseLeave={() => setHighlightStage("")}
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
        <a
          href="#"
          className={styles.button}
          style={
            isButtonHover
              ? { color: "#fff", background: `${themeColor}` }
              : {
                  color: `${themeColor}`,
                  background: "#fff",
                }
          }
          onMouseEnter={() => setIsButtonHover(true)}
          onMouseLeave={() => setIsButtonHover(false)}
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default CardFive;
