import getUserFromApi from "../../functions/getUserFromApi";

export function getuserList() {
  return async dispatch => {
    const userList = await getUserFromApi();
    dispatch({ type: "@user/UPDATE_USER", value: userList });
  };
}
