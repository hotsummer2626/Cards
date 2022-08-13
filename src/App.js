import React, { useState } from "react";
import styled from "styled-components";
import CardOne from "./components/CardOne/CardOne";
import CardTwo from "./components/CardTwo/CardTwo";
import CardThree from "./components/CardThree/CardThree";
import { cardInfo, nikeShoesInfo } from "./cardInfo";

const Container = styled.div`
  display: flex;
  margin-top: 200px;
  justify-content: center;
`;

const App = () => {
  const [currentCardInfo, setCurrentCardInfo] = useState(cardInfo);
  return (
    <Container>
      <CardOne {...currentCardInfo} />
      <CardTwo {...currentCardInfo} setCurrentCardInfo={setCurrentCardInfo} />
      <CardThree {...nikeShoesInfo} />
    </Container>
  );
};

export default App;
