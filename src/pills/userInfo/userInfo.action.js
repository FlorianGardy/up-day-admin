import Axios from "axios";
export const UPDATE_USER_INFO = "@userInfo/UPDATE_USER_INFO";

export const updateUserInfo = userEvents => {
  return { type: UPDATE_USER_INFO, userEvents };
};

export function fetchUserData(id) {
  return async dispatch => {
    const userEvents = await getUserInfoFromApi(id);
    dispatch(updateUserInfo(userEvents));
  };
}

const getUserInfoFromApi = id => {
  return Axios(`http://localhost:3030/events/${id}`).then(res => res.data);
};
