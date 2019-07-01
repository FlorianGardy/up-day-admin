import { combineReducers } from "redux";
import UserReducer from "./pills/users/user.reducer";
import AddUserReducer from "./pills/addUser/addUser.reducer";

export default combineReducers({
  UserReducer,
  AddUserReducer
});
