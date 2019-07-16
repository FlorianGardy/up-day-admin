import React from "react";
import { Card, Table } from "semantic-ui-react";
import PropTypes from "prop-types";

import EventList from "./EventList";

const _cardStyle = { height:"100%", backgroundColor:"rgba(34,36,38,.1)", border:"1px solid rgba(34,36,38,.1)" };
const _cardContentStyle = { fontWeight: "bold", height:"4vw", padding:"0.5em" };

const DayCard = ({ day }) => {
  const { date, events, natureCount } = day;
  const natureEntries = Object.entries(natureCount);

  return (
    <Card fluid centered style={_cardStyle}>
      <Card.Content textAlign="center" style={_cardContentStyle}>
        {date}
      </Card.Content>
      <Card.Content textAlign="center" style ={{ padding:"0", height:"10vh" }}>
      <Table celled style={{padding:"0", maxWidth:"100%"}} compact size="small" >
        {natureEntries.map(([label, count], i) => (
          <Table.Cell key={i}>{`${count} ${label}${count > 1 ? "s" : ""}`}</Table.Cell>
        ))}
        </Table>
      </Card.Content>
      <Card.Content style={{ padding:"0"}} >
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
