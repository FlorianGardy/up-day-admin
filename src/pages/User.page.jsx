import React from "react";
import UserInfoContainer from "../pills/userInfo/userInfo.container";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import TitleMenu from "../components/TitleMenu";

const UserPage = ({ match }) => {
  return (
    <div>
      <TitleMenu />
      <Button as={Link} to="/users">Revenir aux utilisateurs</Button>
      <UserInfoContainer uuid={match.params.uuid} />
    </div>
  );
};

UserPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default UserPage;
