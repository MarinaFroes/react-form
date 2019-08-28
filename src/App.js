import React from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Form />
      <Footer />
    </AppContainer>
  );
}

export default App;
