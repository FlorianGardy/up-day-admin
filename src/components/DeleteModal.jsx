import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleDelete = async uuid => {
    await this.props.deleteUser(uuid);
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Modal
        trigger={
          <Icon
            link
            size="large"
            name="trash alternate outline"
            onClick={this.handleOpen}
            color="orange"
          />
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="browser" content="Suppression d'un utilisateur" />
        <Modal.Content>
          <h3>
            Voulez vous vraiment supprmier <em>{this.props.name}</em> de la base
            de donnée ?
          </h3>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            onClick={uuid => this.handleDelete(this.props.uuid)}
            inverted
          >
            <Icon name="checkmark" /> Oui
          </Button>
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Non
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
