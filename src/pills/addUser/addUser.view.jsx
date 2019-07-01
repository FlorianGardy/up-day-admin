import React from "react";

const AddUserView = ({
  name,
  updateName,
  updatePass,
  password,
  isAdmin,
  updateAdmin,
  role,
  handleRegister
}) => {
  return (
    <form onSubmit={() => handleRegister(name, password, role)}>
      <input
        type="text"
        placeholder="Login"
        value={name}
        onChange={e => updateName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mot de passe"
        value={password}
        onChange={e => updatePass(e.target.value)}
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

export default AddUserView;
