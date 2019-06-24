import getUserFromApi from "../../functions/getUserFromApi";

export const UPDATE_USER_LIST = "@user/UPDATE_USER_LIST";

const updateUser = userList => {
  return { type: UPDATE_USER_LIST, value: userList };
};

export function getuserList() {
  return async dispatch => {
    const userList = await getUserFromApi();
    dispatch(updateUser(userList));
  };
}
