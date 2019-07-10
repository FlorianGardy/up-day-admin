import { combineReducers } from "redux";
import UserReducer from "./pills/users/user.reducer";
import AddUserReducer from "./pills/addUser/addUser.reducer";
import UserEventsReducer from "./pills/userInfo/userInfo.reducer";
import LoginReducer from "./pills/login/login.reducer";
import SearchBarReducer from "./pills/searchBar/searchBar.reducer";

export default combineReducers({
  UserReducer,
  LoginReducer,
  AddUserReducer,
  UserEventsReducer,
  SearchBarReducer
});
