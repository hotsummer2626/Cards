import batmanImg from "./assets/batman.webp";
import nikeShoesImg from "./assets/nike_shoes.png";
import a2StageOneImg from "./assets/a2_s1.webp";
import a2StageTwoImg from "./assets/a2_s2.webp";
import a2StageThreeImg from "./assets/a2_s3.webp";
import a2StageFourImg from "./assets/a2_s4.webp";
import aptamilGoldStageOneImg from "./assets/aptamil_gold_s1.webp";
import aptamilGoldStageTwoImg from "./assets/aptamil_gold_s2.webp";
import aptamilGoldStageThreeImg from "./assets/aptamil_gold_s3.webp";
import aptamilGoldStageFourImg from "./assets/aptamil_gold_s4.webp";
import bellamyStageOne from "./assets/bellamy_s1.webp";
import bellamyStageTwo from "./assets/bellamy_s2.webp";
import bellamyStageThree from "./assets/bellamy_s3.webp";
import bellamyStageFour from "./assets/bellamy_s4.webp";
import a2Logo from "./assets/a2_logo.png";
import aptamilGoldLogo from "./assets/aptamil_gold_logo.png";
import bellamyLogo from "./assets/bellamy_logo.png";

export const cardInfo = {
  title: "Batman",
  img: batmanImg,
  description: "lorem loren lorem loren loren loren loren loren",
  date: "25-01-2020",
  oldPrice: "$20000",
  newPrice: "$9999",
  satisfaction: "4",
};

export const nikeShoesInfo = {
  title: "Nike Shoes",
  img: nikeShoesImg,
};

export const brands = {
  a2: { name: "a2", logo: a2Logo },
  aptamilGold: { name: "aptamilGold", logo: aptamilGoldLogo },
  bellamy: { name: "bellamy", logo: bellamyLogo },
};

const formulaPrice = {
  a1: "38.00",
  a2: "38.00",
  a3: "36.00",
  a4: "36.00",
  k1: "23.20",
  k2: "23.20",
  k3: "20.20",
  k4: "20.20",
  b1: "24.00",
  b2: "21.00",
  b3: "19.20",
  b4: "19.20",
};

export const a2Formula = [
  {
    title: "a2 Platinum Stage One",
    img: a2StageOneImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. res, quasi, repudfugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.a1,
    stage: 1,
  },
  {
    title: "a2 Platinum Stage Two",
    img: a2StageTwoImg,
    description:
      "Lorem ipsum dolor sit amet  coquo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.a2,
    stage: "2",
  },
  {
    title: "a2 Platinum Stage Three",
    img: a2StageThreeImg,
    description:
      "Lorem ipsum dolor siolestiae co quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.a3,
    stage: "3",
  },
  {
    title: "a2 Platinum Stage Four",
    img: a2StageFourImg,
    description:
      "Lorem ipsum dolor iae cons in quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.a4,
    stage: "4",
  },
];

export const aptamilGoldFormula = [
  {
    title: "Aptamil Gold Stage One",
    img: aptamilGoldStageOneImg,
    description:
      "Lorem ipsum dolor iae cons in quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.k1,
    stage: "1",
  },
  {
    title: "Aptamil Gold Stage Two",
    img: aptamilGoldStageTwoImg,
    description:
      "Lorem ipsum dolor iae cons in quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.k2,
    stage: "2",
  },
  {
    title: "Aptamil Gold Stage Three",
    img: aptamilGoldStageThreeImg,
    description:
      "Lorem ipsum dolor iae cons in quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.k3,
    stage: "3",
  },
  {
    title: "Aptamil Gold Stage Four",
    img: aptamilGoldStageFourImg,
    description:
      "Lorem ipsum dolor iae cons in quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.k4,
    stage: "4",
  },
];

export const bellamyFormula = [
  {
    title: "Bellamy Stage One",
    img: bellamyStageOne,
    description:
      "Lorem ipsum dolor iae cons in quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.b1,
    stage: "1",
  },
  {
    title: "Bellamy Stage Two",
    img: bellamyStageTwo,
    description:
      "Lorem ipsum dolor iae cons in quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.b2,
    stage: "2",
  },
  {
    title: "Bellamy Stage Three",
    img: bellamyStageThree,
    description:
      "Lorem ipsum dolor iae cons in quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.b3,
    stage: "3",
  },
  {
    title: "Bellamy Stage Four",
    img: bellamyStageFour,
    description:
      "Lorem ipsum dolor iae cons in quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: formulaPrice.b4,
    stage: "4",
  },
];
