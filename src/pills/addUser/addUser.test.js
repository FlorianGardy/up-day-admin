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
import {
  getAddUserName,
  getAddUserPassword,
  getAddUserRole,
  getAddUserIsAdmin,
  getAddUserEmail
} from "./addUser.selector";
import AddUserReducer from "./addUser.reducer";

describe("# AddUser", () => {
  describe("## actions", () => {
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

  describe("## Reducer", () => {
    it("should return initalState", () => {
      const initialState = {
        name: "",
        password: "",
        role: "user",
        isAdmin: false
      };
      expect(AddUserReducer(initialState, {})).toEqual(initialState);
    });
  });

  describe("## selector", () => {
    it("should return Chuck Norris as username", () => {
      const initialStore = {
        AddUserReducer: { name: "Chuck Norris" }
      };
      expect(getAddUserName(initialStore)).toEqual("Chuck Norris");
    });
    it("should return mypass as password", () => {
      const initialStore = {
        AddUserReducer: { password: "mypass" }
      };
      expect(getAddUserPassword(initialStore)).toEqual("mypass");
    });
    it("should return admin as role", () => {
      const initialStore = {
        AddUserReducer: { role: "admin" }
      };
      expect(getAddUserRole(initialStore)).toEqual("admin");
    });
    it("should return true as isAdmin", () => {
      const initialStore = {
        AddUserReducer: { isAdmin: true }
      };
      expect(getAddUserIsAdmin(initialStore)).toEqual(true);
    });
    it.only("should return mail@gmail.com as email", () => {
      const initialStore = {
        AddUserReducer: { email: "mail@gmail.com" }
      };
      expect(getAddUserEmail(initialStore)).toEqual("mail@gmail.com");
    });
  });
});
