import axios from "axios";

import { getAPIconfig } from "./axiosConfig";
import { manageError } from "./manageErrors";

const dataSelection = response => {
  return response.data.map(d => {
    let { created_at, email, name, role, token, updated_at, uuid } = d;
    return { created_at, email, name, role, token, updated_at, uuid };
  });
};

export default function getUsers() {
  const { baseURL, headers } = getAPIconfig();
  const config = {
    method: "GET",
    baseURL,
    url: `/users`,
    headers
  };
  return axios
    .request(config)
    .then(response => {
      return dataSelection(response);
    })
    .catch(error => {
      return manageError(error);
    });
}
