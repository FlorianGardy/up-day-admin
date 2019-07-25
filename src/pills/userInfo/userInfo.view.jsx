import React from "react";
import PropTypes from "prop-types";

import DayCarousel from "../../components/DayCarousel";

const UserInfoView = ({ events }) => {
  return <DayCarousel events={events} />;
};

DayCarousel.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          comment: PropTypes.string,
          context: PropTypes.arrayOf(PropTypes.string),
          date: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          nature: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          uuid: PropTypes.string.isRequired,
          volume: PropTypes.string.isRequired
        })
      ),
      natureCounter: PropTypes.objectOf(PropTypes.number)
    })
  ).isRequired
};

export default UserInfoView;
