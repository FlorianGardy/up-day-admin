import React from "react";
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
  return (
    <Modal trigger={<Button color="orange">Ajouter un nouvel utilisateur</Button>}>
    <Modal.Header>Ajouter un nouvel utilisateur</Modal.Header>
    <Modal.Content>
      <Grid centered>
        <Form onSubmit={() => handleRegister(name, password, role, email)}>
          <Form.Input
            placeholder="Nom d'utilisateur"
            type="text"
            value={name}
            onChange={e => updateName(e.target.value)}
          />
          <Form.Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => updatePass(e.target.value)}
          />
          <Form.Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => updateEmail(e.target.value)}
          />
          <Form.Checkbox
            inline label='Voulez-vous créer un nouvel administrateur?' required
            onChange={e => updateAdmin(e.target.checked)}
            checked={isAdmin}
          />
          <Button type="submit" color="orange">Valider</Button>
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
  // isAdmin: PropTypes.bool.isRequired,
  updateName: PropTypes.func.isRequired,
  updatePass: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  // updateAdmin: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired
};

export default AddUserView;
