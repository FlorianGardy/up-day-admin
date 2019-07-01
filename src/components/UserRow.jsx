import React from "react";

const UserRow = ({ name, id, password, token, role }) => {
  return (
    <div>
      <h1>Name : {name}</h1>
      <p>Son id est : {id}</p>
      <p>Son mot de pass est : {password}</p>
      <p>cet utilisateur est un {role}</p>
      <p>Son Token est : {token}</p>
    </div>
  );
};

export default UserRow;
