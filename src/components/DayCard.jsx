import React from "react";
import { Card } from "semantic-ui-react";
import EventList from "./EventList";




const DayCard = ({ day }) => {
	const { date, events, natureCount } = day;

	const natureEntries = Object.entries(natureCount);

	return (
		<Card fluid style={{border:"1px solid #F2711C"}}>
      <Card.Content textAlign="center" style={{fontWeight:"bold"}}>{date}</Card.Content>
      <Card.Content textAlign="center">
			{natureEntries.map((n, i) => (
				<div key={i}>
					{n[1]} {n[0]}
				</div>
      ))}
      </Card.Content>
			<Card.Content>
				<EventList events={events} />
			</Card.Content>
		</Card>
	);
};
export default DayCard;
