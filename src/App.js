import React from "react";
import styled from "styled-components";
import CardOne from "./components/CardOne/CardOne";
import { cardInfo } from "./cardInfo";

const Container = styled.div`
  display: flex;
  margin-top: 200px;
`;

const App = () => {
  return (
    <Container>
      <CardOne {...cardInfo} />
    </Container>
  );
};

export default App;
