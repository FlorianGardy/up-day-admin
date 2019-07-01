export const UPDATE_NAME = "@addUser/UPDATE_NAME";
export const UPDATE_PASS = "@addUser/UPDATE_PASS";
export const UPDATE_ADMIN = "@addUser/UPDATE_ADMIN";
export const UPDATE_ROLE = "@addUser/UPDATE_ROLE";

export const updateName = name => {
  return { type: UPDATE_NAME, name };
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
