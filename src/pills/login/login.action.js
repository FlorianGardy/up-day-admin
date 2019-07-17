import { getUserCredentials } from "../../API/getUserCredentials";

export const UPDATE_USER = "@Login/UPDATE_USER";
export const UPDATE_USER_ERROR = "@Login/UPDATE_USER_ERROR";

export const updateUser = (uuid, name, email, token) => {
  return { type: UPDATE_USER, payload: { uuid, name, email, token } };
};

export const updateUserError = error => {
  return { type: UPDATE_USER_ERROR, payload: error };
};

export const checkUserCredentials = (userName, UserPass) => {
  return async (dispatch, getState) => {
    const res = await getUserCredentials(userName, UserPass);
    if (res === 400) {
      dispatch(updateUserError(res));
    } else {
      if (res.role !== "admin") {
        dispatch(updateUserError(403));
      } else {
        const { uuid, name, email, token } = res;
        dispatch(updateUser(uuid, name, email, token));
      }
    }
  };
};
