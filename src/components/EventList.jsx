import React from "react";
import PropTypes from "prop-types";
import EventTable from "./EventTable";

const EventList = ({ events }) => {
  return (
    <div
      style={{
        minHeight: "50vmin",
        overflowY: "auto"
      }}
    >
      {events.map((event, i) => (
        <EventTable key={i} {...event} />
      ))}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventList;
