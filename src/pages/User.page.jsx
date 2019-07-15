import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Container } from "semantic-ui-react";

import UserInfoContainer from "../pills/userInfo/userInfo.container";
import TitleMenu from "../components/TitleMenu";

const _buttonStyle = { marginLeft: "3vw" };

const UserPage = ({ match }) => {
  return (
    <>
      <TitleMenu />
      <Container fluid>
        <Button as={Link} to="/users" color="orange" style={_buttonStyle}>
          Revenir aux utilisateurs
        </Button>
        <UserInfoContainer uuid={match.params.uuid} />
      </Container>
    </>
  );
};

UserPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default UserPage;
