import Axios from "axios";
import { getAPIconfig } from "../../functions/axiosConfig";
export const USER_EVENTS = "@userInfo/USER_EVENTS";
export const USER_NAME = "@userInfo/USER_NAME";

export const updateUserEvents = userEvents => {
  return { type: USER_EVENTS, userEvents };
};

export const updateUserName = userName => {
  return { type: USER_NAME, userName };
};

export function fetchUserData(uuid) {
  return async dispatch => {
    const userEvents = await getUserEventsFromApi(uuid);
    dispatch(updateUserEvents(userEvents));
  };
}

export function fetchUserName(uuid) {
  return async dispatch => {
    const { name } = await getUserNameFromApi(uuid);
    dispatch(updateUserName(name));
  };
}

const getUserNameFromApi = uuid => {
  const { baseURL, headers } = getAPIconfig();
  const config = {
    method: "GET",
    baseURL,
    url: `/users/${uuid}`,
    headers
  };
  return Axios.request(config)
    .then(res => dataSelection(res))
    .catch(err => {
      localStorage.clear();
      return (window.location.href = "/login");
    });
};

const getUserEventsFromApi = uuid => {
  const { baseURL, headers } = getAPIconfig();
  const config = {
    method: "GET",
    baseURL,
    url: `/events/${uuid}`,
    headers
  };
  return Axios.request(config)
    .then(res => dataSelection(res))
    .catch(err => {
      localStorage.clear();
      return (window.location.href = "/login");
    });
};

const dataSelection = response => {
  return response.data;
};
