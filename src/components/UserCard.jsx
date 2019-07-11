import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import moment from "moment";
import "moment/locale/fr";

import DeleteModal from "../components/DeleteModal";

const UserCard = ({
  history,
  name,
  uuid,
  password,
  createdAt,
  token,
  role,
  deleteUser,
  email
}) => {
  return (
    <Card>
      <Card.Content>
        <DeleteModal uuid={uuid} name={name} deleteUser={deleteUser} />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          Crée le : {moment(createdAt).format("DD/MM/YYYY")}
        </Card.Meta>
        <Card.Description>
          Son e-mail : {email ? email : "non communiqué"}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/user/${uuid}`}>
          <div className="ui two buttons">
            <Button basic color="green">
              Calendrier
            </Button>
          </div>
        </Link>
      </Card.Content>
    </Card>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default UserCard;
