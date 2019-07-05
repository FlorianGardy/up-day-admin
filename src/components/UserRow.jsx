import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserRow = ({ name, uuid, password, token, role, deleteUser, email }) => {
  return (
    <div>
      <h1>
        Name : <Link to={`/user/${uuid}`}>{name}</Link>
      </h1>
      <p>Son id est : {uuid}</p>
      <p>Son e-mail : {email ? email : "non communiqué"}</p>
      <p>Son mot de pass est : {password}</p>
      <p>cet utilisateur est un {role}</p>
      <p>Son Token est : {token}</p>
      <button
        style={{ background: "red", color: "white" }}
        onClick={() => deleteUser(uuid)}
      >
        DELETE
      </button>
    </div>
  );
};

UserRow.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default UserRow;
