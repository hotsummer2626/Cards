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
  a2Formula,
  aptamilGoldFormula,
  bellamyFormula,
} from "./cardInfo";
import a2Logo from "./assets/a2_logo.png";
import aptamilGoldLogo from "./assets/aptamil_gold_logo.png";
import bellamyLogo from "./assets/bellamy_logo.png";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 200px;
  justify-content: center;
`;

const App = () => {
  const [currentCardInfo, setCurrentCardInfo] = useState(cardInfo);
  return (
    <Container>
      {/* <CardOne {...currentCardInfo} />
      <CardTwo {...currentCardInfo} setCurrentCardInfo={setCurrentCardInfo} />
      <CardThree {...nikeShoesInfo} />
      <CardFour {...nikeShoesInfo} /> */}
      <CardFive
        brandImg={a2Logo}
        formulaInfo={a2Formula}
        themeColor="#63237a"
      />
      <CardFive
        brandImg={aptamilGoldLogo}
        formulaInfo={aptamilGoldFormula}
        themeColor="#0181c0"
      />
      <CardFive
        brandImg={bellamyLogo}
        formulaInfo={bellamyFormula}
        themeColor="#1664a0"
      />
    </Container>
  );
};

export default App;
