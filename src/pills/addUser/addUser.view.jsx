import React from "react";
import PropTypes from "prop-types";

const AddUserView = ({
  name,
  updateName,
  email,
  updateEmail,
  updatePass,
  password,
  isAdmin,
  updateAdmin,
  role,
  handleRegister
}) => {
  return (
    <form onSubmit={() => handleRegister(name, password, role, email)}>
      <input
        type="text"
        placeholder="Login"
        value={name}
        onChange={e => updateName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={e => updatePass(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => updateEmail(e.target.value)}
      />
      <label>admin</label>
      <input
        type="checkbox"
        onChange={e => updateAdmin(e.target.checked)}
        checked={isAdmin}
      />
      <input type="submit" />
    </form>
  );
};

AddUserView.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  updateName: PropTypes.func.isRequired,
  updatePass: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updateAdmin: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired
};

export default AddUserView;
