import React from "react";
import PropTypes from "prop-types";
import { List, Table } from "semantic-ui-react";
import "moment/locale/fr";

const EventTable = ({ date, type, nature, context, volume, comment }) => {
	return (
		<Table style={{padding:"0", minWidth:"100%"}}>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell singleLine>{date}</Table.HeaderCell>
					<Table.HeaderCell singleLine>{nature}</Table.HeaderCell>
					<Table.HeaderCell singleLine>{type}</Table.HeaderCell>
					<Table.HeaderCell singleLine>{volume}</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{context && (
					<Table.Row>
						<Table.Cell>Contexte</Table.Cell>
						<Table.Cell
							colspan={3}
							style={{ display: "flex", justifyContent: "space-evenly" }}
						>
							{context.map((el, i) => (
								<div key={i}>{el}</div>
							))}
						</Table.Cell>
					</Table.Row>
				)}
				{comment && (
					<Table.Row>
						<Table.Cell>Commentaires</Table.Cell>
						<Table.Cell
							colspan={3}
							style={{ color: "teal", fontStyle: "italic" }}
						>
							{comment}
						</Table.Cell>
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
	context: PropTypes.array,
	comment: PropTypes.string
};

export default EventTable;
