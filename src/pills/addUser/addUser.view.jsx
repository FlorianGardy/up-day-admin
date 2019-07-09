import React from "react";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

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
      <Input
        placeholder="Nom d'utilisateur"
        type="text"
        value={name}
        onChange={e => updateName(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={e => updatePass(e.target.value)}
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => updateEmail(e.target.value)}
      />
      <Input type="submit" />
      <label>Admin ?</label>
      <Input
        color="red"
        type="checkbox"
        onChange={e => updateAdmin(e.target.checked)}
        checked={isAdmin}
      />
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
