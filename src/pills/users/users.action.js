import getUsers from "../../API/getUsers";
import deleteUser from "../../API/deleteUser";

export const UPDATE_USERS_LIST = "@user/UPDATE_USERS_LIST";

export const updateUsersList = userList => {
  return { type: UPDATE_USERS_LIST, userList };
};

export function getUsersList() {
  return async dispatch => {
    const userList = await getUsers();
    dispatch(updateUsersList(userList));
  };
}

export function handleDeleteUser(uuid) {
  return async dispatch => {
    await deleteUser(uuid);
    const userList = await getUsers();
    dispatch(updateUsersList(userList));
  };
}
