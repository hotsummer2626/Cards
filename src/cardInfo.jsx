import batmanImg from "./assets/batman.webp";
import nikeShoesImg from "./assets/nike_shoes.png";
import a2StageOneImg from "./assets/a2_s1.jpg";
import a2StageTwoImg from "./assets/a2_s2.jpg";
import a2StageThreeImg from "./assets/a2_s3.jpg";
import a2StageFourImg from "./assets/a2_s4.jpg";

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

const a2Price = {
  a1: "38.00",
  a2: "38.00",
  a3: "36.00",
  a4: "36.00",
};

export const a2Formula = [
  {
    title: "a2 Platinum Stage One",
    img: a2StageOneImg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. res, quasi, repudfugit. Illo aliquid amet ipsum id!",
    price: a2Price.a1,
    stage: 1,
  },
  {
    title: "a2 Platinum Stage Two",
    img: a2StageTwoImg,
    description:
      "Lorem ipsum dolor sit amet  coquo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: a2Price.a2,
    stage: "2",
  },
  {
    title: "a2 Platinum Stage Three",
    img: a2StageThreeImg,
    description:
      "Lorem ipsum dolor siolestiae co quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: a2Price.a3,
    stage: "3",
  },
  {
    title: "a2 Platinum Stage Four",
    img: a2StageFourImg,
    description:
      "Lorem ipsum dolor iae cons in quo dolores, quasi, repudiandae saepe odio obcaecati dolorum sed fugit. Illo aliquid amet ipsum id!",
    price: a2Price.a4,
    stage: "4",
  },
];
