import React from "react";
import { Card } from "semantic-ui-react";
import EventList from "./EventList";

const DayCard = ({ day }) => {
  const { date, events, natureCount } = day;

  const natureEntries = Object.entries(natureCount);

  return (
    <Card fluid style={{ backgroundColor:"rgba(34,36,38,.1)", border:"1px solid rgba(34,36,38,.1)" }}>
      <Card.Content textAlign="center" style={{ fontWeight: "bold" }}>
        {date}
      </Card.Content>
      <Card.Content textAlign="center" style={{ padding:"0"}}>
        {natureEntries.map((n, i) => (
          <div key={i}>
            {n[1]} {n[0]}
            {n[1] > 1 && "s"}
          </div>
        ))}
      </Card.Content>
      <Card.Content style={{ padding:"0"}} >
        <EventList events={events} />
      </Card.Content>
    </Card>
  );
};
export default DayCard;
