import { USER_EVENTS } from "./userInfo.action";

const initialState = {
  userEvents: []
};

export default function UserEventsReducer(state = initialState, action) {
  switch (action.type) {
    case USER_EVENTS:
      return { ...state, userEvents: action.userEvents };
    default:
      return state;
  }
}
