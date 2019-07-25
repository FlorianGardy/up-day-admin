import axios from "axios";
import { getAPIconfig } from "./axiosConfig";
import { manageError } from "./manageErrors";

const dataSelection = response => response.data;

export function getUserCredentials(name, password) {
  const { baseURL } = getAPIconfig();

  const config = {
    method: "POST",
    baseURL,
    url: `login`,
    data: {
      name,
      password
    }
  };

  return axios
    .request(config)
    .then(response => dataSelection(response))
    .catch(error => {
      return manageError(error);
    });
}
