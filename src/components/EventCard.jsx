import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import moment from "moment";
import "moment/locale/fr";

const EventCard = ({ date, type, nature, context, comment }) => {
  return (
    <Card>
      <Card.Content header={nature} />
      <Card.Content>
        <Card.Header>{type}</Card.Header>
        <Card.Meta>{moment(date).format("dddd DD MMMM à HH:mm")}</Card.Meta>
        {context && (
          <Card.Description>
            {context.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </Card.Description>
        )}
        <Card.Description />
      </Card.Content>
      <Card.Content extra>Commentaire : {comment}</Card.Content>
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
