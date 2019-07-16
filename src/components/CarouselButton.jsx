import React from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "semantic-ui-react";

const button = {
  backgroundColor: "transparent",
  textAlign: "center",
  margin: "0",
  padding: "0"
};

const CarouselButton = ({ icon, onClick }) => {
  return (
    <Button onClick={() => onClick()} style={button}>
      <Icon name={icon} size="big" color="orange" fitted />
    </Button>
  );
};

CarouselButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CarouselButton;
