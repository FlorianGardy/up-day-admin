import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUserData } from "./userInfo.action";
import UserInfoView from "./userInfo.view";
import { getUserEvents } from "./userInfo.selector";

const UserInfoContainer = ({ uuid, fetchUserData, userEvents }) => {
  useEffect(() => {
    fetchUserData(uuid);
  }, [fetchUserData, uuid]);

  return <UserInfoView uuid={uuid} />;
};

const mapStateToProps = state => {
  return {
    userEvents: getUserEvents(state)
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
  userEvents: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoContainer);
