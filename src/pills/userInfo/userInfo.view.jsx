import React from "react";
import EventCarousel from "../../components/EventCarousel";

const UserInfoView = ({ id }) => {
  return (
    <div>
      <h1>Mon user id est : {id}</h1>
      <EventCarousel />
    </div>
  );
};

export default UserInfoView;
