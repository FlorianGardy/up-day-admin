import React from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "semantic-ui-react";


const button = {
	backgroundColor: "transparent",
	textAlign: "center",
	padding: "10px"
};
const iconStyle = {
	position: "fixed",
	top: "50vh",
	display: "block",
}

const CarouselButton = ({ icon, onClick }) => {


  return (
    <Button onClick={() => onClick()} style={button}>
      <Icon style={iconStyle} name={icon} size="big" fitted color="orange"/>
    </Button>
  );
};

CarouselButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CarouselButton;
