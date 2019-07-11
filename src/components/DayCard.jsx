import React from "react";
import { Card } from "semantic-ui-react";
import EventList from "./EventList";

const DayCard = ({ day }) => {
  const { date, events, natureCount } = day;

  const natureEntries = Object.entries(natureCount);

  return (
    <div style={{ width: "30%" }}>
      <Card centered fluid>
        <Card.Content>
          <Card.Header>{date}</Card.Header>
          {natureEntries.map((n, i) => (
            <div key={i}>
              {n[0]} -> {n[1]}
            </div>
          ))}
          <Card.Description>
            <EventList events={events} />
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};
export default DayCard;
