import React from "react";
import UserInfoContainer from "../pills/userInfo/userInfo.container";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Table, Grid, Container } from "semantic-ui-react";
import TitleMenu from "../components/TitleMenu";

const UserPage = ({ match }) => {
	return (
		<>
			<TitleMenu />
			<Container>
					<Button as={Link} to="/users" color="orange">
						Revenir aux utilisateurs
					</Button>
					<UserInfoContainer uuid={match.params.uuid} />
			</Container>
		</>
	);
};

UserPage.propTypes = {
	match: PropTypes.object.isRequired
};

export default UserPage;
