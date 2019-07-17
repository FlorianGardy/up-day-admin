import Axios from "axios";

import { getAPIconfig } from "./axiosConfig";
import { manageError } from "./manageErrors";

export default function createUser(name, password, role, email) {
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
  return Axios.request(config).catch(error => {
    return manageError(error);
  });
}
