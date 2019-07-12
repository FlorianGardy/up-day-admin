import axios from "axios";
import { getAPIconfig } from "./axiosConfig";

export default function getUserFromApi() {
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
    .catch(err => {
      localStorage.clear();
      return (window.location.href = "/login");
    });
}

const dataSelection = response => {
  return response.data;
};
