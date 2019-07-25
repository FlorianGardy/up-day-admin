import { UPDATE_USERS_LIST, updateUsersList } from "./users.action";
import { getUsersListSelector } from "./users.selector";
import Users from "./users.reducer";

describe("#User", () => {
  describe("## actions", () => {
    it("should create an action to update users list", () => {
      const usersList = [
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
        type: UPDATE_USERS_LIST,
        usersList
      };
      expect(updateUsersList(usersList)).toEqual(expectedAction);
    });
  });

  describe("## reducer", () => {
    it("should return initial state", () => {
      const initialState = {
        userList: []
      };
      expect(Users(initialState, {})).toEqual(initialState);
    });
    it("should handle UPDATE_USERS_LIST", () => {
      const usersList = [
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
        Users({ usersList: [] }, { type: UPDATE_USERS_LIST, usersList })
      ).toEqual({ usersList });
    });
  });

  describe("## selector", () => {
    it("should return [] as userList", () => {
      const store = {
        Users: {
          usersList: []
        }
      };
      expect(getUsersListSelector(store)).toEqual([]);
    });
  });
});
