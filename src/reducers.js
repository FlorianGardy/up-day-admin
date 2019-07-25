import { combineReducers } from "redux";

import Users from "./pills/users/users.reducer";
import AddUser from "./pills/addUser/addUser.reducer";
import UserEvents from "./pills/userInfo/userInfo.reducer";
import Login from "./pills/login/login.reducer";
import SearchBar from "./pills/searchBar/searchBar.reducer";

export default combineReducers({
  Users,
  Login,
  AddUser,
  UserEvents,
  SearchBar
});
