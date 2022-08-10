import React from "react";
import styled from "styled-components";
import CardOne from "./components/CardOne/CardOne";

const Container = styled.div`
  display: flex;
  margin-top: 200px;
`;

const App = () => {
  return (
    <Container>
      <CardOne />
    </Container>
  );
};

export default App;
