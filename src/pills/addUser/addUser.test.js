import {
  updateName,
  updatePass,
  updateAdmin,
  updateRole,
  resetAddUser,
  UPDATE_EMAIL,
  updateEmail
} from "./addUser.action";
import {
  UPDATE_NAME,
  UPDATE_PASS,
  UPDATE_ADMIN,
  UPDATE_ROLE,
  RESET
} from "./addUser.action";
import {
  getAddUserNameSelector,
  getAddUserPasswordSelector,
  getAddUserRoleSelector,
  getAddUserIsAdminSelector,
  getAddUserEmailSelector
} from "./addUser.selector";
import AddUser from "./addUser.reducer";

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
    it("should create an action to update email", () => {
      const email = "gg@gmail.com";
      const expectedAction = {
        type: UPDATE_EMAIL,
        email
      };
      expect(updateEmail(email)).toEqual(expectedAction);
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
      expect(AddUser(initialState, {})).toEqual(initialState);
    });
    it("should handle UPDATE_NAME", () => {
      const name = "Chuck Norris";
      expect(AddUser({ name: "" }, { type: UPDATE_NAME, name })).toEqual({
        name: "Chuck Norris"
      });
    });
    it("should handle UPDATE_EMAIL", () => {
      const email = "gaga@laydy.com";
      expect(AddUser({ email: "" }, { type: UPDATE_EMAIL, email })).toEqual({
        email: "gaga@laydy.com"
      });
    });
    it("should handle UPDATE_PASS", () => {
      const password = "monpass";
      expect(
        AddUser({ password: "" }, { type: UPDATE_PASS, password })
      ).toEqual({
        password: "monpass"
      });
    });
    it("should handle UPDATE_ADMIN", () => {
      const isAdmin = true;
      expect(
        AddUser({ isAdmin: false }, { type: UPDATE_ADMIN, isAdmin })
      ).toEqual({
        isAdmin: true
      });
    });
    it("should handle UPDATE_ROLE", () => {
      const role = "admin";
      expect(
        AddUser({ role: "standart" }, { type: UPDATE_ROLE, role })
      ).toEqual({
        role: "admin"
      });
    });
    it("should handle RESET", () => {
      const state = {
        name: "Chuck",
        password: "ccNorris",
        email: "deus@gmail.com",
        role: "admin",
        isAdmin: true
      };
      expect(AddUser(state, { type: RESET })).toEqual({
        name: "",
        password: "",
        email: "",
        role: "standard",
        isAdmin: false
      });
    });
  });

  describe("## selector", () => {
    it("should return Chuck Norris as username", () => {
      const initialStore = {
        AddUser: { name: "Chuck Norris" }
      };
      expect(getAddUserNameSelector(initialStore)).toEqual("Chuck Norris");
    });
    it("should return mypass as password", () => {
      const initialStore = {
        AddUser: { password: "mypass" }
      };
      expect(getAddUserPasswordSelector(initialStore)).toEqual("mypass");
    });
    it("should return admin as role", () => {
      const initialStore = {
        AddUser: { role: "admin" }
      };
      expect(getAddUserRoleSelector(initialStore)).toEqual("admin");
    });
    it("should return true as isAdmin", () => {
      const initialStore = {
        AddUser: { isAdmin: true }
      };
      expect(getAddUserIsAdminSelector(initialStore)).toEqual(true);
    });
    it("should return mail@gmail.com as email", () => {
      const initialStore = {
        AddUser: { email: "mail@gmail.com" }
      };
      expect(getAddUserEmailSelector(initialStore)).toEqual("mail@gmail.com");
    });
  });
});
