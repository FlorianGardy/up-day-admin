import React from "react";
import PropTypes from "prop-types";
import EventCarousel from "../../components/EventCarousel";

const UserInfoView = ({ id }) => {
  return (
    <div>
      <h1>Mon user id est : {id}</h1>
      <EventCarousel />
    </div>
  );
};

UserInfoView.propTypes = {
  id: PropTypes.string.isRequired
};

export default UserInfoView;
