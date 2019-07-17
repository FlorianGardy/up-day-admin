import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchUserEvents, fetchUserName } from "./userInfo.action";
import UserInfoView from "./userInfo.view";
import {
  getUserEventsGroupedByDay,
  getUserNameSelector
} from "./userInfo.selector";

const UserInfoContainer = ({
  uuid,
  fetchUserEvents,
  userEventsGroupedByDay,
  fetchUserName,
  userName
}) => {
  useEffect(() => {
    fetchUserEvents(uuid);
    fetchUserName(uuid);
  }, [fetchUserEvents, fetchUserName, uuid]);

  return (
    <UserInfoView uuid={uuid} events={userEventsGroupedByDay} name={userName} />
  );
};

UserInfoContainer.propTypes = {
  uuid: PropTypes.string.isRequired,
  fetchUserData: PropTypes.func,
  userEventsGroupedByDay: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          date: PropTypes.string.isRequierd,
          type: PropTypes.string.isRequierd,
          nature: PropTypes.string.isRequierd,
          volume: PropTypes.string.isRequierd,
          context: PropTypes.arrayOf(PropTypes.string),
          comment: PropTypes.string,
          uuid: PropTypes.string.isRequierd
        })
      ).isRequired,
      natureCounter: PropTypes.objectOf(PropTypes.number).isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    userEventsGroupedByDay: getUserEventsGroupedByDay(state),
    userName: getUserNameSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserEvents: uuid => dispatch(fetchUserEvents(uuid)),
    fetchUserName: uuid => dispatch(fetchUserName(uuid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoContainer);
