import React from "react";
import { Button, Form, Grid, Header, Segment, Icon, Image } from "semantic-ui-react";

import logoKineOrange from "../../assets/logoKineOrange.png";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

const LoginView = ({ onSubmit, statusCode }) => {
  let styled = { color: "red" };
  styled.opacity = statusCode !== 200 ? 1 : 0;
  let errorMessage;
  switch (statusCode) {
    case 400:
      errorMessage = "Identifiant ou mot de passe incorrecte";
      break;
    case 403:
      errorMessage = "l'utilisateur n'est pas admin";
      break;
    default:
      errorMessage = "";
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="orange" textAlign="center">
          <Image src={logoKineOrange} alt="logo" style={{width:"30%"}} />
          <h1 style={{fontSize:"3rem", fontWeight:"bold", color:"#243330"}}>UP Day Admin</h1>
        <Header.Subheader style={{fontSize:"1.5rem"}}>Bienvenue sur votre espace administrateur</Header.Subheader>
        <br/>
        </Header>
        <Form size="large" onSubmit={e => onSubmit(e)}>
          <Segment>
            <Form.Input
              name="username"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Identifiant"
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Mot de passe"
              type="password"
            />
            <Button style={{backgroundColor:"#243330"}} inverted fluid size="large" type="submit">
              Se connecter
            </Button>
          </Segment>
        </Form>
        <Segment style={styled}>
          <p>{errorMessage}</p>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default LoginView;
