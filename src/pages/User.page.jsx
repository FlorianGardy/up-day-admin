import React from "react";
import UserInfoContainer from "../pills/userInfo/userInfo.container";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserPage = ({ match }) => {
  return (
    <div>
      <Link to="/users">
        <button>Revenir aux utilisateurs</button>
      </Link>
      <UserInfoContainer id={match.params.id} />
    </div>
  );
};

UserPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default UserPage;
