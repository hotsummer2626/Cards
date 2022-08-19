import React, { useState } from "react";
import styled from "styled-components";
import CardOne from "./components/CardOne/CardOne";
import CardTwo from "./components/CardTwo/CardTwo";
import CardThree from "./components/CardThree/CardThree";
import CardFour from "./components/CardFour/CardFour";
import CardFive from "./components/CardFive/CardFive";
import {
  cardInfo,
  nikeShoesInfo,
  brands,
  a2Formula,
  aptamilGoldFormula,
  bellamyFormula,
} from "./cardInfo";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 200px;
`;

const App = () => {
  const [currentCardInfo, setCurrentCardInfo] = useState(cardInfo);
  return (
    <Container>
      <CardOne {...currentCardInfo} />
      <CardTwo {...currentCardInfo} setCurrentCardInfo={setCurrentCardInfo} />
      <CardThree {...nikeShoesInfo} />
      <CardFour {...nikeShoesInfo} />
      <CardFive brand={brands.a2} formulaInfo={a2Formula} />
      <CardFive brand={brands.aptamilGold} formulaInfo={aptamilGoldFormula} />
      <CardFive brand={brands.bellamy} formulaInfo={bellamyFormula} />
    </Container>
  );
};

export default App;
