import axios from "axios";
import { getAPIconfig } from "./axiosConfig";

export function getUserCredentialsFromAPI(name, password) {
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
    .then(response => _dataSelection(response))
    .catch(error => {
      return error.response.data.statusCode;
    });
}

const _dataSelection = response => response.data;
