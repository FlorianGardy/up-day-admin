import React from "react";
import EventCard from "./EventCard";
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
        // <EventCard key={i} {...event} />
        <EventTable key={i} {...event} />
      ))}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventList;
