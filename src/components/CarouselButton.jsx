import React from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "semantic-ui-react";

const CarouselButton = ({ icon, onClick }) => {
  return (
    <Button color="purple" onClick={index => onClick(index - 1)}>
      <Icon disabled name={icon} />
    </Button>
  );
};

CarouselButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CarouselButton;
