export const UPDATE_NAME = "@AddUser/UPDATE_NAME";
export const UPDATE_EMAIL = "@AddUser/UPDATE_EMAIL";
export const UPDATE_PASS = "@AddUser/UPDATE_PASS";
export const UPDATE_ADMIN = "@AddUser/UPDATE_ADMIN";
export const UPDATE_ROLE = "@AddUser/UPDATE_ROLE";
export const RESET = "@AddUser/RESET";

export const updateName = name => {
  return { type: UPDATE_NAME, name };
};
export const updateEmail = email => {
  return { type: UPDATE_EMAIL, email };
};
export const updatePass = password => {
  return { type: UPDATE_PASS, password };
};
export const updateAdmin = isAdmin => {
  return { type: UPDATE_ADMIN, isAdmin };
};
export const updateRole = role => {
  return { type: UPDATE_ROLE, role };
};
export const resetAddUser = () => {
  return { type: RESET };
};
