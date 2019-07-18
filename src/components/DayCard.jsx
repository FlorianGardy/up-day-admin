import React from "react";
import { Card, Table } from "semantic-ui-react";
import PropTypes from "prop-types";

import EventList from "./EventList";

const cardStyle = {
  minHeight: "max-content",
  backgroundColor: "rgba(212,212,212,.3)",
  padding: "0 5px",
  display: "flex",
  flexDirection: "column",
  alignContent: "top"
};
const dateContentStyle = {
  fontWeight: "bold",
  color: "#243330",
  maxHeight: "max-content"
};
const recapContentStyle = {
  padding: "10px 0",
  maxHeight: "min-content"
};
const tableStyle = {
  padding: "0",
  maxWidth: "100%",
  backgroundColor: "rgba(36,51, 48, 1)"
};
const eventStyle = {
  padding: "0"
};

const DayCard = ({ day }) => {
  const { date, events, natureCounter } = day;
  const natureEntries = Object.entries(natureCounter);

  return (
    <Card fluid centered style={cardStyle}>
      <Card.Content textAlign="center" style={dateContentStyle}>
        {date}
      </Card.Content>
      <Card.Content textAlign="center" style={recapContentStyle}>
        <Table
          celled
          style={tableStyle}
          compact
          size="small"
          textAlign="center"
          inverted
        >
          <Table.Header>
            <Table.Row />
          </Table.Header>
          <Table.Body>
            <Table.Row>
              {natureEntries.map(([label, count], i) => (
                <Table.Cell key={i}>{`${label}${
                  count > 1 ? "s" : ""
                }`}</Table.Cell>
              ))}
            </Table.Row>
            <Table.Row>
              {natureEntries.map(([label, count], i) => (
                <Table.Cell key={i}>{count}</Table.Cell>
              ))}
            </Table.Row>
          </Table.Body>
        </Table>
      </Card.Content>
      <Card.Content style={eventStyle}>
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
    natureCounter: PropTypes.objectOf(PropTypes.number)
      .isRequired /* keys are dynamics here */
  }).isRequired
};

export default DayCard;
