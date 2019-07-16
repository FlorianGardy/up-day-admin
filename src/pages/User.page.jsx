import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import UserInfoContainer from "../pills/userInfo/userInfo.container";
import TitleMenu from "../components/TitleMenu";

const _buttonContainer = { width: "90vw", margin: "3vmin 5vw"}
const _buttonStyle = {width:"25vw"}

const UserPage = ({ match }) => {
  return (
    <div>
      <TitleMenu />
        <div style={_buttonContainer}>
        <Button
          as={Link}
          to="/users"
          color="orange"
          style={_buttonStyle}
        >
          Revenir aux utilisateurs
        </Button>
        </div>
        <UserInfoContainer uuid={match.params.uuid} />
    </div>
  );
};

UserPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default UserPage;
