import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CardGroup } from "semantic-ui-react";

import DayCard from "./DayCard";
import CarouselButton from "./CarouselButton";

const carouselStyle = {
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
    <div style={carouselStyle}>
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

export default DayCarousel;
