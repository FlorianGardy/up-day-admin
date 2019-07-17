import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid, Modal, Form, Button } from "semantic-ui-react";

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
  const [modalOpen, setModalOpen] = useState(false);

  const addUserButtonStyle = { width: "25vw" };

  const ADD_USER_BUTTON_LABEL = "Ajouter un utilisateur";
  const TITLE = "Ajouter un nouvel utilisateur";
  const LOGIN_PLACEHODLER = "Identifiant";
  const PASSWORD_PLACEHODLER = "Mot de passe";
  const IS_ADMIN_LABEL = "Voulez-vous créer un nouvel administrateur?";
  // const EMAIL_PLACEHOLDER = "E-mail";

  const handleRegisterCheck = (name, password, role, email) => {
    if (name && password && role) {
      handleRegister(name, password, role, email);
    }
    setModalOpen(false);
  };

  return (
    <Modal
      trigger={
        <Button
          onClick={() => setModalOpen(true)}
          color="orange"
          style={addUserButtonStyle}
        >
          {ADD_USER_BUTTON_LABEL}
        </Button>
      }
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      size="small"
    >
      <Modal.Header>{TITLE}</Modal.Header>
      <Modal.Content>
        <Grid centered>
          <Form
            onSubmit={() => handleRegisterCheck(name, password, role, email)}
          >
            <Form.Input
              placeholder={LOGIN_PLACEHODLER}
              type="text"
              value={name}
              onChange={e => updateName(e.target.value)}
            />
            <Form.Input
              placeholder={PASSWORD_PLACEHODLER}
              type="password"
              value={password}
              onChange={e => updatePass(e.target.value)}
            />
            {/* This input have been disable because of personal data problematique */}
            {/* <Form.Input
            placeholder={EMAIL_PLACEHOLDER}
            type="email"
            value={email}
            onChange={e => updateEmail(e.target.value)}
          /> */}
            <Form.Checkbox
              inline
              label={IS_ADMIN_LABEL}
              required
              onChange={(e, d) => updateAdmin(d.checked)}
              checked={isAdmin}
            />
            <Button type="submit" color="orange">
              Valider
            </Button>
          </Form>
        </Grid>
      </Modal.Content>
    </Modal>
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
