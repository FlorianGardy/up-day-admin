import getUserFromApi from "../../functions/getUserFromApi";
import Axios from "axios";
import { getAPIconfig } from "../../functions/axiosConfig";

export const UPDATE_USER_LIST = "@user/UPDATE_USER_LIST";

export const updateUserList = userList => {
  return { type: UPDATE_USER_LIST, userList };
};

export function getuserList() {
  return async dispatch => {
    const userList = await getUserFromApi();
    dispatch(updateUserList(userList));
  };
}

export function deleteUserFromDB(uuid) {
  return async dispatch => {
    await deleteUser(uuid);
    const userList = await getUserFromApi();
    dispatch(updateUserList(userList));
  };
}

const deleteUser = uuid => {
  const { baseURL, headers } = getAPIconfig();
  const config = {
    method: "DELETE",
    baseURL,
    url: `/users/${uuid}`,
    headers
  };
  return Axios.request(config);
};
