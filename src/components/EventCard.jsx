import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import "moment/locale/fr";

const EventCard = ({ date, type, nature, context, comment }) => {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell>{date}</Table.HeaderCell>
        <Table.HeaderCell>{nature}</Table.HeaderCell>
        <Table.HeaderCell>({type})</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
      {context && (
        <Table.Row >
          {context.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
          </Table.Row>
          )}
      {comment && <Table.Row >{comment}</Table.Row>}
      </Table.Body>
    </Table>
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
