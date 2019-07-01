import React from "react";
import UserInfoContainer from "../pills/userInfo/userInfo.container";

const UserPage = ({ match }) => {
  return (
    <div>
      <UserInfoContainer id={match.params.id} />
    </div>
  );
};

export default UserPage;
