import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "./userInfo.action";
import UserInfoView from "./userInfo.view";

const UserInfoContainer = ({ id, fetchUserData, userEvents }) => {
  useEffect(() => {
    fetchUserData(id);
  }, [fetchUserData, id]);

  return <UserInfoView id={id} events={userEvents} />;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoContainer);
