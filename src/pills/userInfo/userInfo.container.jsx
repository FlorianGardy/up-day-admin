import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUserData } from "./userInfo.action";
import UserInfoView from "./userInfo.view";
import { getUserEventsGroupedByDay } from "./userInfo.selector";

const UserInfoContainer = ({ uuid, fetchUserData, userEventsGroupedByDay }) => {
  useEffect(() => {
    fetchUserData(uuid);
  }, [fetchUserData, uuid]);

  return <UserInfoView uuid={uuid} events={userEventsGroupedByDay} />;
};

const mapStateToProps = state => {
  return {
    userEventsGroupedByDay: getUserEventsGroupedByDay(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: uuid => dispatch(fetchUserData(uuid))
  };
};

UserInfoContainer.propTypes = {
  uuid: PropTypes.string.isRequired,
  fetchUserData: PropTypes.func.isRequired,
  userEventsGroupedByDay: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoContainer);
