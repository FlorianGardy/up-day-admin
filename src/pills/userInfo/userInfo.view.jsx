import React from "react";
import PropTypes from "prop-types";

import DayCarousel from "../../components/DayCarousel";

const UserInfoView = ({ events }) => {
	return <DayCarousel events={events} />;
};

UserInfoView.propTypes = {
	events: PropTypes.array.isRequired
};

export default UserInfoView;
