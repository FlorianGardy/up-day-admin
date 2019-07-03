import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/fr";

const EventCard = ({ date, type, nature, context, comment }) => {
  return (
    <div style={{ border: "blue 1px solid", textAlign: "center" }}>
      <p>{moment(date).format("dddd DD MMMM à HH:mm")}</p>
      <p>type : {type}</p>
      <p>nature : {nature}</p>
      <div>
        context :
        {context.map((el, i) => (
          <p key={i}>{el}</p>
        ))}
      </div>
      <p>comment : {comment}</p>
    </div>
  );
};

EventCard.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  context: PropTypes.array,
  comment: PropTypes.string
};

export default EventCard;
