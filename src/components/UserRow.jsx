import React from "react";

const UserRow = ({ name, id, password }) => {
  return (
    <div>
      <h1>Name : {name}</h1>
      <p>Son id est : {id}</p>
      <p>Son mot de pass est : {password}</p>
    </div>
  );
};

export default UserRow;
