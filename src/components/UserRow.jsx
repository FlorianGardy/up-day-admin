import React from "react";
import { Link } from "react-router-dom";

const UserRow = ({ name, id, password, token, role, deleteUser }) => {
  return (
    <div>
      <h1>
        Name : <Link to={`/user/${id}`}>{name}</Link>
      </h1>
      <p>Son id est : {id}</p>
      <p>Son mot de pass est : {password}</p>
      <p>cet utilisateur est un {role}</p>
      <p>Son Token est : {token}</p>
      <button
        style={{ background: "red", color: "white" }}
        onClick={() => deleteUser(id)}
      >
        DELETE
      </button>
    </div>
  );
};

export default UserRow;
