import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CardGroup } from "semantic-ui-react";

import { getUserEvents } from "../pills/userInfo/userInfo.selector";
import DayCard from "./DayCard";
import CarouselButton from "./CarouselButton";

const _carousel = {
  display: "grid",
  gridTemplateColumns: "5vw 90vw 5vw"
};

const NUMBER_OF_DISPLAYED_CARDS = 3;

const DayCarousel = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (events.length > NUMBER_OF_DISPLAYED_CARDS) {
      setCurrentIndex(events.length - NUMBER_OF_DISPLAYED_CARDS);
    } else {
      setCurrentIndex(0);
    }
  }, [events]);

  return (
    <div style={_carousel}>
      <CarouselButton
        icon="chevron left"
        onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
      />
      <CardGroup stackable centered itemsPerRow={NUMBER_OF_DISPLAYED_CARDS}>
        {events
          .filter(
            (day, index) =>
              index >= currentIndex &&
              index < currentIndex + NUMBER_OF_DISPLAYED_CARDS
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
