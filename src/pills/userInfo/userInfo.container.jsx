import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUserData, fetchUserName } from "./userInfo.action";
import UserInfoView from "./userInfo.view";
import { getUserEventsGroupedByDay, getUserName } from "./userInfo.selector";

const UserInfoContainer = ({
  uuid,
  fetchUserData,
  userEventsGroupedByDay,
  fetchUserName,
  userName
}) => {
  console.log("TCL: userName", userName);
  useEffect(() => {
    fetchUserData(uuid);
    fetchUserName(uuid);
  }, [fetchUserData, fetchUserName, uuid]);

  return (
    <UserInfoView uuid={uuid} events={userEventsGroupedByDay} name={userName} />
  );
};

const mapStateToProps = state => {
  return {
    userEventsGroupedByDay: getUserEventsGroupedByDay(state),
    userList: fetchUserData(state),
    userName: getUserName(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: uuid => dispatch(fetchUserData(uuid)),
    fetchUserName: uuid => dispatch(fetchUserName(uuid))
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
