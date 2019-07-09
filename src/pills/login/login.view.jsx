import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const LoginView = ({ history, onSubmit }) => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="purple" textAlign="center">
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

            <Button color="purple" fluid size="large" type="submit">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginView;
