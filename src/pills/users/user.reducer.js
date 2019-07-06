import { UPDATE_USER_LIST } from "./user.action";

const initalState = {
  userList: []
};

export default function UserReducer(state = initalState, action) {
  switch (action.type) {
    case UPDATE_USER_LIST:
      return { ...state, userList: action.userList };
    default:
      return state;
  }
}
