import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserEvents } from "../pills/userInfo/userInfo.selector";
import DayCard from "./DayCard";
import CarouselButton from "./CarouselButton";
import { CardGroup } from "semantic-ui-react";

const carousel = {
  display: "grid",
  gridTemplateColumns: "3% 94% 3%"
};

const NUMBER_OF_DISPLAYED_CARDS = 3;

const DayCarousel = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(
    events.length + NUMBER_OF_DISPLAYED_CARDS - 1
  );

  return (
    <div style={carousel}>
      <CarouselButton
        icon="chevron left"
        onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
      />
      <CardGroup centered itemsPerRow={NUMBER_OF_DISPLAYED_CARDS}>
        {events
          .filter(
            day =>
              events.indexOf(day) < currentIndex + NUMBER_OF_DISPLAYED_CARDS &&
              events.indexOf(day) >= currentIndex
          )
          .map((day, i) => (
            <DayCard key={i} day={day} />
          ))}
      </CardGroup>
      <CarouselButton
        icon="chevron right"
        onClick={() =>
          setCurrentIndex(
            Math.min(
              events.length - NUMBER_OF_DISPLAYED_CARDS,
              currentIndex + 1
            )
          )
        }
      />
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
