import Axios from "axios";

import { getAPIconfig } from "./axiosConfig";
import { manageError } from "./manageErrors";

const dataSelection = response => response.data;

export default function getEvents(uuid) {
  const { baseURL, headers } = getAPIconfig();
  const config = {
    method: "GET",
    baseURL,
    url: `/users/${uuid}/events`,
    headers
  };
  return Axios.request(config)
    .then(res => dataSelection(res))
    .catch(error => {
      return manageError(error);
    });
}
