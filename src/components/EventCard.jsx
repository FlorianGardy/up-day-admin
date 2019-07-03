import React from "react";
import moment from "moment";
import "moment/locale/fr";

const EventCard = ({ id, date, type, nature, context, comment }) => {
  return (
    <div key={id} style={{ border: "blue 1px solid", textAlign: "center" }}>
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

export default EventCard;
