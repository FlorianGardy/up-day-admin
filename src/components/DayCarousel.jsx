import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserEvents } from "../pills/userInfo/userInfo.selector";
import DayCard from "./DayCard";
import CarouselButton from "./CarouselButton";

const DayCarousel = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          border: "1px blue solid",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <CarouselButton
          icon="chevron left"
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
        />

        {events
          .filter(
            day =>
              events.indexOf(day) < currentIndex + 3 &&
              events.indexOf(day) >= currentIndex
          )
          .map((day, i) => (
            <DayCard key={i} day={day} />
          ))}
        <CarouselButton
          icon="chevron right"
          onClick={() =>
            setCurrentIndex(Math.min(events.length - 3, currentIndex + 1))
          }
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userEvents: getUserEvents(state)
  };
};

DayCarousel.propTypes = {
  userEvents: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(DayCarousel);
