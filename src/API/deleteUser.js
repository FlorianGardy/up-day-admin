import Axios from "axios";

import { getAPIconfig } from "./axiosConfig";
import { manageError } from "./manageErrors";

export default function deleteUser(uuid) {
  const { baseURL, headers } = getAPIconfig();
  const config = {
    method: "DELETE",
    baseURL,
    url: `/users/${uuid}`,
    headers
  };
  return Axios.request(config).catch(error => {
    return manageError(error);
  });
}
