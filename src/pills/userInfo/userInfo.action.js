import Axios from "axios";
export const USER_EVENTS = "@userInfo/USER_EVENTS";

export const updateUserEvents = userEvents => {
  return { type: USER_EVENTS, userEvents };
};

export function fetchUserData(id) {
  return async dispatch => {
    const userEvents = await getUserEventsFromApi(id);
    dispatch(updateUserEvents(userEvents));
  };
}

const getUserEventsFromApi = id => {
  return Axios(`http://localhost:3030/events/${id}`).then(res => res.data);
};
