import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import "moment/locale/fr";

const EventTable = ({ date, type, nature, context, volume, comment }) => {
	return (
		<Table style={{padding:"0", maxWidth:"100%"}} compact size="small" >
			<Table.Header>
				<Table.Row textAlign="center">
					<Table.HeaderCell width={4} singleLine>{date}</Table.HeaderCell>
					<Table.HeaderCell width={4} singleLine>{nature}</Table.HeaderCell>
					<Table.HeaderCell width={4} singleLine>{type}</Table.HeaderCell>
					<Table.HeaderCell width={4} singleLine>{volume}</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{context ? (
					<Table.Row>
						<Table.Cell singleLine width={4} >Contexte : </Table.Cell >
							{context.map((el, i) => (
								<Table.Cell key={i}> {el} </Table.Cell>
							))}
					</Table.Row>
				) : <Table.Row><Table.Cell colSpan={4}>Pas de contexte</Table.Cell></Table.Row>}
          {comment ? (
					<Table.Row>
						<Table.Cell
							colSpan={4}
							style={{ color: "teal", fontStyle: "italic" }}
						>
              <span style={{ color: "black", fontStyle: "normal" }}>Commentaires : </span>
							{comment}
						</Table.Cell>
					</Table.Row>
          ) : <Table.Row><Table.Cell colSpan={4}>Pas de commentaire</Table.Cell></Table.Row>}

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
