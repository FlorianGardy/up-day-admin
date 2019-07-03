import {
  updateName,
  updatePass,
  updateAdmin,
  updateRole,
  resetAddUser
} from "./addUser.action";
import {
  UPDATE_NAME,
  UPDATE_PASS,
  UPDATE_ADMIN,
  UPDATE_ROLE,
  RESET
} from "./addUser.action";

describe("actions", () => {
  it("should create an action to update user name", () => {
    const name = "Jonathan";
    const expectedAction = {
      type: UPDATE_NAME,
      name
    };
    expect(updateName(name)).toEqual(expectedAction);
  });
  it("should create an action to update user password", () => {
    const password = "Jonathan";
    const expectedAction = {
      type: UPDATE_PASS,
      password
    };
    expect(updatePass(password)).toEqual(expectedAction);
  });
  it("should create an action to update user right", () => {
    const isAdmin = true;
    const expectedAction = {
      type: UPDATE_ADMIN,
      isAdmin
    };
    expect(updateAdmin(isAdmin)).toEqual(expectedAction);
  });
  it("should create an action to update user role", () => {
    const role = "admin";
    const expectedAction = {
      type: UPDATE_ROLE,
      role
    };
    expect(updateRole(role)).toEqual(expectedAction);
  });
  it("should create an action to reset user", () => {
    const expectedAction = {
      type: RESET
    };
    expect(resetAddUser()).toEqual(expectedAction);
  });
});
