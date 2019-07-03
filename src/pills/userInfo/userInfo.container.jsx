import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUserData } from "./userInfo.action";
import UserInfoView from "./userInfo.view";

const UserInfoContainer = ({ id, fetchUserData, userEvents }) => {
  useEffect(() => {
    fetchUserData(id);
  }, [fetchUserData, id]);

  id = 1; // FIX to get events (waiting for auth)

  return <UserInfoView id={id} />;
};

const mapStateToProps = state => {
  return {
    userEvents: state.UserInfoReducer.userEvents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: id => dispatch(fetchUserData(id))
  };
};

UserInfoContainer.propTypes = {
  id: PropTypes.string.isRequired,
  fetchUserData: PropTypes.func.isRequired,
  userEvents: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoContainer);
