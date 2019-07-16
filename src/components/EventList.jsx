import React from "react";
import PropTypes from "prop-types";

import EventCard from "./EventCard";

const _style = {
  height: "45vMin",
  overflow: "auto"
};

const EventList = ({ events }) => {
  return (
    <div style={_style}>
      {events.map(({ date, type, nature, context, volume, comment }, i) => (
        <EventCard
          key={i}
          {...{ date, type, nature, context, volume, comment }}
        />
      ))}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequierd,
      type: PropTypes.string.isRequierd,
      nature: PropTypes.string.isRequierd,
      volume: PropTypes.string.isRequierd,
      context: PropTypes.arrayOf(PropTypes.string),
      comment: PropTypes.string,
      uuid: PropTypes.string.isRequierd
    })
  ).isRequired
};

export default EventList;
