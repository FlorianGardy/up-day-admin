import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import UserInfoContainer from "../pills/userInfo/userInfo.container";
import TitleMenu from "../components/TitleMenu";
import UserId from "../components/UserId";

const containerStyle = {
  width: "90vw",
  margin: "3vmin 5vw",
  display: "flex",
  justifyContent: "space-between"
};
const buttonStyle = { width: "25vw" };

const BACK_BUTTON_LABEL = "Revenir aux utilisateurs";

const UserPage = ({ match }) => {
  return (
    <div>
      <TitleMenu />
      <div style={containerStyle}>
        <Button as={Link} to="/users" color="orange" style={buttonStyle}>
          {BACK_BUTTON_LABEL}
        </Button>
        <UserId />
      </div>
      <UserInfoContainer uuid={match.params.uuid} />
    </div>
  );
};

UserPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      uuid: PropTypes.string
    }).isRequired
  }).isRequired
};

export default UserPage;
