import { UPDATE_USERS_LIST } from "./users.action";

const initalState = {
  usersList: []
};

export default function Users(state = initalState, action) {
  switch (action.type) {
    case UPDATE_USERS_LIST:
      return { ...state, usersList: action.userList };
    default:
      return state;
  }
}
