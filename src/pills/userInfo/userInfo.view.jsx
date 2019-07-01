import React from "react";

const UserInfoView = ({ id, events }) => {
  if (events === undefined) {
    return <p>loading</p>;
  }
  return (
    <div>
      <h1>Mon user id est : {id}</h1>
      <div>
        {events.map(({ date, type, nature, volume, context, comment, id }) => (
          <div key={id} style={{ border: "blue 1px solid" }}>
            <p>date : {date}</p>
            <p>type : {type}</p>
            <p>nature : {nature}</p>
            <div>
              context :
              {context.map((el, i) => (
                <p key={i}>{el}</p>
              ))}
            </div>
            <p>comment : {comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfoView;
