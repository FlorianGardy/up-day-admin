import React from "react";
import PropTypes from "prop-types";
import DayCarousel from "../../components/DayCarousel";
import { Segment } from "semantic-ui-react";

const UserInfoView = ({ name, events }) => {
  
  return (
    <>
      <Segment style={{ width: "90vw", margin: "3vmin 5vw", padding:"1vmin"}}>
        <h1 style={{ textAlign:"center", fontSize:"1.5rem" }}>Identifiant n° {name}</h1>
      </Segment>
        <DayCarousel events={events} />
      </>
  );
};

UserInfoView.propTypes = {
  name: PropTypes.string.isRequired
};

export default UserInfoView;
