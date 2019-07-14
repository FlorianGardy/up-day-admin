import { UPDATE_USER } from "./login.action";

const initialState = {
  uuid: "",
  name: "",
  email: "",
  token: "",
  statusCode: 200
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        uuid: action.payload.uuid,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
        statusCode: 200
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        statusCode: action.payload
      };
    default:
      return state;
  }
}
