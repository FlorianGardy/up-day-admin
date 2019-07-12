import React from "react";
import PropTypes from "prop-types";
import DayCarousel from "../../components/DayCarousel";

const UserInfoView = ({ name, events, userList }) => {
  return (
    <div>
      <h1>Calendrier de {name}</h1>
      <DayCarousel events={events} />
    </div>
  );
};

UserInfoView.propTypes = {
  name: PropTypes.string.isRequired
};

export default UserInfoView;
