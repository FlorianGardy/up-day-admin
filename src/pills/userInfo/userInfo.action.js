import getEvents from "../../API/getEvents";
import getUserByUuid from "../../API/getUserByUuid";

export const USER_EVENTS = "@userInfo/USER_EVENTS";
export const CLEAR_USER_EVENTS = "@userInfo/CLEAR_USER_EVENTS";
export const USER_NAME = "@userInfo/USER_NAME";

export const clearUserEvents = () => {
  return { type: CLEAR_USER_EVENTS };
};

export const updateUserEvents = userEvents => {
  return { type: USER_EVENTS, userEvents };
};

export const updateUserName = userName => {
  return { type: USER_NAME, userName };
};

export function fetchUserEvents(uuid) {
  return async dispatch => {
    const userEvents = await getEvents(uuid);
    dispatch(updateUserEvents(userEvents));
  };
}

export function fetchUserName(uuid) {
  return async dispatch => {
    const { name } = await getUserByUuid(uuid);
    dispatch(updateUserName(name));
  };
}
