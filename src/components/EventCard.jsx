import React from "react";
import PropTypes from "prop-types";
import { List } from "semantic-ui-react";
import "moment/locale/fr";

const EventCard = ({ date, type, nature, context, volume, comment }) => {
	return (
		<List divided>
			<List.Item>
				<List.Header  style={{display:"flex", justifyContent:"space-between"}}>
					<div>{date}</div><div>{nature}</div><div>{type}</div><div>{volume}</div>
				</List.Header>
			</List.Item>
			<List.Item>
				<List.Content>
					{context && (
						<List.Description style={{display:"flex", justifyContent:"space-evenly"}}>
							{context.map((el, i) => (
								<div key={i}>{el}</div>
							))}
						</List.Description>
					)}
					{comment && <List.Description style={{color:"teal", fontStyle:"italic"}}>{comment}</List.Description>}
				</List.Content>
			</List.Item>
		</List>
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
