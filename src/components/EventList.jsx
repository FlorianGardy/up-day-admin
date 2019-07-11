import React from "react";
import EventCard from "./EventCard";
import PropTypes from "prop-types";

const EventList = ({ events }) => {
  return (
    <div
      style={{
        height: "65vh",
        overflow: "auto"
      }}
    >
      {events.map((event, i) => (
        <EventCard key={i} {...event} />
      ))}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventList;
