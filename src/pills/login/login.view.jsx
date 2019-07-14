import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const LoginView = ({ history, onSubmit, statusCode }) => {
  let styled = {};
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
          Bienvenue
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
            <Button color="orange" fluid size="large" type="submit">
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
