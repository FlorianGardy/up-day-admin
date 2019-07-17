import React from "react";
import PropTypes from "prop-types";

import EventTable from "./EventTable";

const listStyle = {
  overflow: "auto",
  maxWidth: "100%"
};

const EventList = ({ events }) => {
  return (
    <div style={listStyle}>
      {events.map(({ date, type, nature, context, volume, comment }, i) => (
        <EventTable
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
