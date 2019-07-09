import React from "react";
import UserInfoContainer from "../pills/userInfo/userInfo.container";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

const UserPage = ({ match }) => {
  return (
    <div>
      <Link to="/users">
        <Button>Revenir aux utilisateurs</Button>
      </Link>
      <UserInfoContainer uuid={match.params.uuid} />
    </div>
  );
};

UserPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default UserPage;
