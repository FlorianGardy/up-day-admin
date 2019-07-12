import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import "moment/locale/fr";

const EventCard = ({ date, type, nature, context, comment }) => {
  return (
    <Card>
      <Card.Content>
        {nature} ({type})
      </Card.Content>
      <Card.Meta>{date}</Card.Meta>
      {context && (
        <Card.Meta>
          {context.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        </Card.Meta>
      )}
      {comment && <Card.Description>Commentaire : {comment}</Card.Description>}
    </Card>
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
