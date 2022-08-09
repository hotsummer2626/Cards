import React from "react";
import styled from "styled-components";
import Card_1 from "./components/Card_1/Card_1";

const Container = styled.div`
  display: flex;
  margin-top: 200px;
`;

const App = () => {
  return (
    <Container>
      <Card_1 />
      <Card_1 />
      <Card_1 />
      <Card_1 />
    </Container>
  );
};

export default App;
