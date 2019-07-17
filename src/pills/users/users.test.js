import { UPDATE_USER_LIST, updateUserList } from "./user.action";
import { getUserList } from "./user.selector";
import UserReducer from "./user.reducer";

describe("#User", () => {
  describe("## actions", () => {
    it("should create an action to update users list", () => {
      const userList = [
        {
          uuid: "e0f48fb0-9f1e-11e9-a0b8-cdce88839668",
          name: "Florian",
          password:
            "$2b$10$1K3YV6QKGNQhMMGDzFadoO0xh.iQyhHtyX5IBReRjouc7xiSDG9ie",
          email: "",
          role: "standard",
          token: "thisisatoken",
          createdAt: "2019-07-05T12:17:38.434Z",
          updatedAt: "2019-07-05T12:17:38.434Z"
        }
      ];
      const expectedAction = {
        type: UPDATE_USER_LIST,
        userList
      };
      expect(updateUserList(userList)).toEqual(expectedAction);
    });
  });

  describe("## reducer", () => {
    it("should return initial state", () => {
      const initialState = {
        userList: []
      };
      expect(UserReducer(initialState, {})).toEqual(initialState);
    });
    it("should handle UPDATE_USER_LIST", () => {
      const userList = [
        {
          uuid: "e0f48fb0-9f1e-11e9-a0b8-cdce88839668",
          name: "Florian",
          password:
            "$2b$10$1K3YV6QKGNQhMMGDzFadoO0xh.iQyhHtyX5IBReRjouc7xiSDG9ie",
          email: "",
          role: "standard",
          token: "thisisatoken",
          createdAt: "2019-07-05T12:17:38.434Z",
          updatedAt: "2019-07-05T12:17:38.434Z"
        }
      ];
      expect(
        UserReducer({ userList: [] }, { type: UPDATE_USER_LIST, userList })
      ).toEqual({ userList });
    });
  });

  describe("## selector", () => {
    it("should return [] as userList", () => {
      const store = {
        UserReducer: {
          userList: []
        }
      };
      expect(getUserList(store)).toEqual([]);
    });
  });
});
