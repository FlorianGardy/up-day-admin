import React from "react";
import PropTypes from "prop-types";
import DayCarousel from "../../components/DayCarousel";

const UserInfoView = ({ uuid, events }) => {
  return (
    <div>
      <h1>Mon user id est : {uuid}</h1>
      <DayCarousel events={events} />
    </div>
  );
};

UserInfoView.propTypes = {
  uuid: PropTypes.string.isRequired
};

export default UserInfoView;
