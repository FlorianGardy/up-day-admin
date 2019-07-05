import {
  UPDATE_NAME,
  UPDATE_PASS,
  UPDATE_ADMIN,
  UPDATE_ROLE,
  RESET
} from "./addUser.action";

const initalState = {
  name: "",
  password: "",
  role: "standard",
  isAdmin: false
};

export default function AddUserReducer(state = initalState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.name };
    case UPDATE_PASS:
      return { ...state, password: action.password };
    case UPDATE_ADMIN:
      return { ...state, isAdmin: action.isAdmin };
    case UPDATE_ROLE:
      return { ...state, role: action.role };
    case RESET:
      return { ...initalState };
    default:
      return state;
  }
}
