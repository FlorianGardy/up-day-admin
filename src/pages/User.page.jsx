import React from "react";
import UserInfoContainer from "../pills/userInfo/userInfo.container";
import { Link } from "react-router-dom";

const UserPage = ({ match, history }) => {
  return (
    <div>
      <Link to="/users">
        <button>Revenir aux utilisateurs</button>
      </Link>
      <UserInfoContainer id={match.params.id} />
    </div>
  );
};

export default UserPage;
