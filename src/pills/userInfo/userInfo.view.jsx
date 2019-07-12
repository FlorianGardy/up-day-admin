import React from "react";
import PropTypes from "prop-types";
import DayCarousel from "../../components/DayCarousel";
import { Container } from "semantic-ui-react";


const UserInfoView = ({ uuid, events }) => {
  return (
    <>
      <h1>{uuid}</h1>
      <DayCarousel events={events} />
    </>
  );
};

UserInfoView.propTypes = {
  uuid: PropTypes.string.isRequired
};

export default UserInfoView;
