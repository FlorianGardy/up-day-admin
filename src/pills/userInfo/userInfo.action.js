import Axios from "axios";
export const USER_EVENTS = "@userInfo/USER_EVENTS";

export const updateUserEvents = userEvents => {
  return { type: USER_EVENTS, userEvents };
};

export function fetchUserData(uuid) {
  return async dispatch => {
    const userEvents = await getUserEventsFromApi(uuid);
    dispatch(updateUserEvents(userEvents));
  };
}

const getUserEventsFromApi = uuid => {
  return Axios(`http://localhost:3030/events/${uuid}`).then(res => res.data);
};
