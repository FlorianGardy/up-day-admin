import React, { useState } from "react";
import { connect } from "react-redux";
import EventCard from "./EventCard";
import PropTypes from "prop-types";

const EventCarousel = ({ userEvents: events }) => {
  const [index, setIndex] = useState(0);

  const handleIndex = index => {
    if (index <= 0) {
      index = 0;
    }
    if (index > events.length - 3) {
      index = events.length - 3;
    }
    setIndex(index);
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px green solid",
        justifyContent: "space-between"
      }}
    >
      <button onClick={() => handleIndex(index - 1)}>&larr;</button>
      {events
        .sort((a, b) => {
          a = new Date(a.date);
          b = new Date(b.date);
          return a > b ? -1 : a < b ? 1 : 0;
        })
        .filter(
          event =>
            events.indexOf(event) < index + 3 && events.indexOf(event) >= index
        )
        .map((event, i) => (
          <EventCard key={i} {...event} />
        ))}
      <button onClick={() => handleIndex(index + 1)}>&rarr;</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userEvents: state.UserInfoReducer.userEvents
  };
};

EventCarousel.propTypes = {
  userEvents: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(EventCarousel);
