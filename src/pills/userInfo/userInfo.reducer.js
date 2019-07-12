import { USER_EVENTS, USER_NAME } from "./userInfo.action";

const initialState = {
  userEvents: [],
  userName: ""
};

export default function UserEventsReducer(state = initialState, action) {
  switch (action.type) {
    case USER_EVENTS:
      return { ...state, userEvents: action.userEvents };
    case USER_NAME:
      return { ...state, userName: action.userName };
    default:
      return state;
  }
}
