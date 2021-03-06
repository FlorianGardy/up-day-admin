import Axios from "axios";

import { getAPIconfig } from "./axiosConfig";
import { manageError } from "./manageErrors";

const dataSelection = response => {
  return response.data;
};

export default function getUserByUuid(uuid) {
  const { baseURL, headers } = getAPIconfig();
  const config = {
    method: "GET",
    baseURL,
    url: `/users/${uuid}`,
    headers
  };
  return Axios.request(config)
    .then(res => dataSelection(res))
    .catch(error => {
      return manageError(error);
    });
}
