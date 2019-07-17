import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import "moment/locale/fr";

const tableStyle = {
  padding: "0",
  margin: "5px 0",
  maxWidth: "100%"
};
const commentTitleStyle = {
  color: "black",
  fontStyle: "normal"
};
const commentCellStyle = {
  color: "teal",
  fontStyle: "italic"
};

const switchColorTable = nature => {
  switch (nature) {
    case "Miction":
      return "yellow";
    case "Défécation":
      return "brown";
    case "Boisson":
      return "blue";
    case "Activité":
      return "green";
    default:
      return "orange";
  }
};

const CONTEXT_LABEL = "Contexte : ";
const NO_CONTEXT_TEXT = "Pas de contexte";
const COMMENT_LABEL = "Commentaires : ";
const NO_COMMENT_TEXT = "Pas de commentaire";

const EventTable = ({ date, type, nature, context, volume, comment }) => {
  let colorTable = switchColorTable(nature);
  return (
    <Table style={tableStyle} compact size="small" color={colorTable}>
      <Table.Header>
        <Table.Row textAlign="center">
          <Table.HeaderCell>{date}</Table.HeaderCell>
          <Table.HeaderCell>{nature}</Table.HeaderCell>
          <Table.HeaderCell>{type}</Table.HeaderCell>
          <Table.HeaderCell singleLine>{volume}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {context ? (
          <Table.Row>
            <Table.Cell singleLine>{CONTEXT_LABEL}</Table.Cell>
            {context.map((el, i) => (
              <Table.Cell key={i}> {el} </Table.Cell>
            ))}
          </Table.Row>
        ) : (
          <Table.Row>
            <Table.Cell colSpan={4}>{NO_CONTEXT_TEXT}</Table.Cell>
          </Table.Row>
        )}
        {comment ? (
          <Table.Row>
            <Table.Cell colSpan={4} style={commentCellStyle}>
              <span style={commentTitleStyle}>{COMMENT_LABEL}</span>
              {comment}
            </Table.Cell>
          </Table.Row>
        ) : (
          <Table.Row>
            <Table.Cell colSpan={4}>{NO_COMMENT_TEXT}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

EventTable.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  context: PropTypes.arrayOf(PropTypes.string),
  comment: PropTypes.string
};

export default EventTable;
