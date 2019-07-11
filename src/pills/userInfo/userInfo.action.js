import Axios from "axios";
import { getAPIconfig } from "../../functions/axiosConfig";
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
  const { baseURL, headers } = getAPIconfig();
  const config = {
    method: "GET",
    baseURL,
    url: `/events/${uuid}`,
    headers
  };
  return Axios.request(config).then(res => dataSelection(res));
};

const dataSelection = response => {
  return response.data;
};
