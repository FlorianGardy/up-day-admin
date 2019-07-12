import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const LoginView = ({ history, onSubmit, statusCode }) => {
  let styled = {};
  styled.opacity = statusCode === 400 ? 1 : 0;
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="orange" textAlign="center">
          Se connecter
        </Header>
        <Form size="large" onSubmit={e => onSubmit(e)}>
          <Segment>
            <Form.Input
              name="username"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
            />
            <Form.Input
              fluid
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="orange" fluid size="large" type="submit">
              Login
            </Button>
          </Segment>
        </Form>
        <Segment style={styled}>
          <p>Nom d'utilisateur ou mot de passe invalid</p>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default LoginView;
