import React, { useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";

const DELETE_MESSAGE = `Voulez vous vraiment supprimer cet utilisateur de la base de donnée ?`;
const TITLE = "Suppression d'un utilisateur";
const CONFIRM = "oui";
const REFUSE = "non";

const DeleteModal = ({ deleteUser, name, uuid }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseWithDelete = uuid => {
    deleteUser(uuid);
    setModalOpen(false);
  };

  return (
    <Modal
      trigger={
        <Icon
          link
          size="large"
          name="trash alternate outline"
          onClick={() => setModalOpen(true)}
          color="orange"
        />
      }
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      basic
      size="small"
    >
      <Header icon="browser" content={TITLE} />
      <Modal.Content>
        <h3>{DELETE_MESSAGE}</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="red"
          onClick={uuid => handleCloseWithDelete(uuid)}
          inverted
        >
          <Icon name="checkmark" />
          {CONFIRM}
        </Button>
        <Button color="green" onClick={() => setModalOpen(false)} inverted>
          <Icon name="checkmark" />
          {REFUSE}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

DeleteModal.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired
};

export default DeleteModal;
