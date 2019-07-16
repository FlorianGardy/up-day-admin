import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";
import "moment/locale/fr";


const _tableStyle = {
  padding: "0",
  margin: "5px 0",
  maxWidth: "100%"
}
const _commentTitleStyle = {
  color: "black",
  fontStyle: "normal"
}
const _commentCellStyle = {
  color: "teal",
  fontStyle: "italic"
}

const EventTable = ({ date, type, nature, context, volume, comment }) => {
	let colorTab = "";
	switch (nature) {
		case "Miction":
			colorTab = "yellow";
			break;
		case "Défécation":
			colorTab = "brown";
			break;
		case "Boisson":
			colorTab = "blue";
			break;
		case "Activité":
			colorTab = "green";
			break;
		default:
			break;
	}

	return (
		<Table
			style={_tableStyle}
			compact
			size="small"
			color={colorTab}
		>
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
						<Table.Cell singleLine>Contexte : </Table.Cell>
						{context.map((el, i) => (
							<Table.Cell key={i}> {el} </Table.Cell>
						))}
					</Table.Row>
				) : (
					<Table.Row>
						<Table.Cell colSpan={4}>Pas de contexte</Table.Cell>
					</Table.Row>
				)}
				{comment ? (
					<Table.Row>
						<Table.Cell
							colSpan={4}
							style={_commentCellStyle}
						>
							<span style={_commentTitleStyle}>
								Commentaires :{" "}
							</span>
							{comment}
						</Table.Cell>
					</Table.Row>
				) : (
					<Table.Row>
						<Table.Cell colSpan={4}>Pas de commentaire</Table.Cell>
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
