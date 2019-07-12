import React from "react";
import PropTypes from "prop-types";
import DayCarousel from "../../components/DayCarousel";


const UserInfoView = ({ uuid, events }) => {
  return (
    <>
      <h1 style={{marginLeft:"3vw"}}>{uuid}</h1>
      <DayCarousel events={events} />
    </>
  );
};

UserInfoView.propTypes = {
  uuid: PropTypes.string.isRequired
};

export default UserInfoView;
