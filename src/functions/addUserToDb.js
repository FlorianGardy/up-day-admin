import Axios from "axios";
import { getAPIconfig } from "./axiosConfig";

export const addUserToDb = (name, password, email, role) => {
  const { baseURL, headers } = getAPIconfig();
  const config = {
    method: "POST",
    baseURL,
    url: "/users",
    headers,
    data: {
      name,
      password,
      email,
      role
    }
  };
  return Axios.request(config).catch(err => {
    localStorage.clear();
    return (window.location.href = "/login");
  });
};
