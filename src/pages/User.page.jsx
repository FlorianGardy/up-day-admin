import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import UserInfoContainer from "../pills/userInfo/userInfo.container";
import TitleMenu from "../components/TitleMenu";


const UserPage = ({ match }) => {
  return (
    <div>
      <TitleMenu />
        <div style={{ width: "90vw", margin: "3vmin 5vw"}}>
        <Button
          as={Link}
          to="/users"
          color="orange"
          style={{width:"25vw"}}
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
