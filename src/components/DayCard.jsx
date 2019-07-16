import React from "react";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";

import EventList from "./EventList";

const _cardStyle = { border: "1px solid #F2711C" };
const _cardContentStyle = { fontWeight: "bold" };

const DayCard = ({ day }) => {
  const { date, events, natureCount } = day;
  const natureEntries = Object.entries(natureCount);

  return (
    <Card fluid style={_cardStyle}>
      <Card.Content textAlign="center" style={_cardContentStyle}>
        {date}
      </Card.Content>
      <Card.Content textAlign="center">
        {natureEntries.map(([label, count], i) => (
          <div key={i}>{`${count} ${label}${count > 1 ? "s" : ""}`}</div>
        ))}
      </Card.Content>
      <Card.Content>
        <EventList events={events} />
      </Card.Content>
    </Card>
  );
};

DayCard.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string.isRequierd,
        type: PropTypes.string.isRequierd,
        nature: PropTypes.string.isRequierd,
        volume: PropTypes.string.isRequierd,
        context: PropTypes.arrayOf(PropTypes.string),
        comment: PropTypes.string,
        uuid: PropTypes.string.isRequierd
      })
    ).isRequired,
    natureCount: PropTypes.objectOf(PropTypes.number)
      .isRequired /* keys are dynamics here */
  }).isRequired
};

export default DayCard;
