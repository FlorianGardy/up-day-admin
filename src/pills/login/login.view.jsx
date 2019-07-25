import React from "react";
import { Button, Form, Grid, Header, Segment, Image } from "semantic-ui-react";
import PropTypes from "prop-types";

import logoKineOrange from "../../assets/logoKineOrange.png";

const errorMessageStyle = { color: "red", border: "none" };

const gridStyle = { height: "100vh" };
const gridColumnStyle = { maxWidth: "450px" };
const logoStyle = { width: "30%" };
const titleStyle = { fontSize: "3rem", fontWeight: "bold", color: "#243330" };
const subTitleStyle = { fontSize: "1.5rem" };
const submitButtonStyle = { backgroundColor: "#243330", color: "white" };

const TITLE = "UP Day Admin";
const SUBTITLE = "Bienvenue sur votre espace administrateur";
const LOGIN_PLACEHOLDER = "Identifiant";
const PASSWORD_PLACEHOLDER = "Mot de passe";

const switchErrorMessage = statusCode => {
  switch (statusCode) {
    case 400:
      return "Identifiant ou mot de passe incorrect";
    case 403:
      return "l'utilisateur n'est pas admin";
    default:
      return "";
  }
};

const LoginView = ({ onSubmit, statusCode }) => {
  let errorMessage = switchErrorMessage(statusCode);
  return (
    <Grid textAlign="center" style={gridStyle} verticalAlign="middle">
      <Grid.Column style={gridColumnStyle}>
        <Header textAlign="center">
          <Image src={logoKineOrange} alt="logo" style={logoStyle} />
          <h1 style={titleStyle}>{TITLE}</h1>
          <Header.Subheader style={subTitleStyle}>{SUBTITLE}</Header.Subheader>
          <br />
        </Header>
        <Form size="large" onSubmit={e => onSubmit(e)}>
          <Segment>
            <Form.Input
              fluid
              type="text"
              name="username"
              icon="user"
              iconPosition="left"
              placeholder={LOGIN_PLACEHOLDER}
            />
            <Form.Input
              fluid
              type="password"
              name="password"
              icon="lock"
              iconPosition="left"
              placeholder={PASSWORD_PLACEHOLDER}
            />
            <Button
              fluid
              type="submit"
              style={submitButtonStyle}
              size="large"
            >
              Se connecter
            </Button>
          </Segment>
          <div style={errorMessageStyle}>
            <p>{errorMessage}</p>
          </div>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

LoginView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  statusCode: PropTypes.number.isRequired
};

export default LoginView;
