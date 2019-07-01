import { UPDATE_USER_INFO } from "./userInfo.action";

const initialState = {
  userEvents: []
};

export default function UpdateUserInfo(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return { ...state, userEvents: action.userEvents };
    default:
      return state;
  }
}
