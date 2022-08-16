import React, { useState } from "react";
import styled from "styled-components";
import CardOne from "./components/CardOne/CardOne";
import CardTwo from "./components/CardTwo/CardTwo";
import CardThree from "./components/CardThree/CardThree";
import CardFour from "./components/CardFour/CardFour";
import CardFive from "./components/CardFive/CardFive";
import { cardInfo, nikeShoesInfo, a2Formula } from "./cardInfo";

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
      <CardFive formulaInfo={a2Formula} />
    </Container>
  );
};

export default App;
