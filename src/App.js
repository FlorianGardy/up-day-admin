import React from "react";
import Router from "./Router";
import { Container } from 'semantic-ui-react';
import TitleMenu from "./components/TitleMenu";


function App() {
  return (
  <Container fluid>
    <TitleMenu />
    <Router />;
  </Container>
  )
}

export default App;
