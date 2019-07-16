import {
  USER_EVENTS,
  USER_NAME,
  CLEAR_USER_EVENTS,
  updateUserEvents,
  updateUserName
} from "./userInfo.action";
import UserEventsReducer from "./userInfo.reducer";
import { getUserEvents, getUserName } from "./userInfo.selector";

describe("# UserInfo", () => {
  describe("## actions", () => {
    it("should create an action to update user events list", () => {
      const userEvents = [
        {
          id: 1,
          date: "2019-07-04T16:30:00.000Z",
          type: "Précaution",
          nature: "Miction",
          volume: "+ +",
          context: ["Fuite"],
          comment: "Apres le travail",
          userId: 1,
          createdAt: "2019-07-05T17:46:13.769Z",
          updatedAt: "2019-07-05T17:46:13.769Z",
          userUuid: null
        }
      ];
      const expectedAction = {
        type: USER_EVENTS,
        userEvents
      };
      expect(updateUserEvents(userEvents)).toEqual(expectedAction);
    });
    it("should create an action to update user name", () => {
      const userName = "Chuck Norris";
      const expectedAction = {
        type: USER_NAME,
        userName
      };
      expect(updateUserName(userName)).toEqual(expectedAction);
    });
  });

  describe("## reducer", () => {
    it("should return initalState", () => {
      const initialState = {
        userEvents: [],
        userName: ""
      };
      expect(UserEventsReducer(initialState, {})).toEqual(initialState);
    });
    it("should handle USER_EVENTS", () => {
      const userEvents = [
        {
          id: 1,
          date: "2019-07-04T16:30:00.000Z",
          type: "Précaution",
          nature: "Miction",
          volume: "+ +",
          context: ["Fuite"],
          comment: "Apres le travail",
          userId: 1,
          createdAt: "2019-07-05T17:46:13.769Z",
          updatedAt: "2019-07-05T17:46:13.769Z",
          userUuid: null
        }
      ];
      expect(
        UserEventsReducer({ userEvents: [] }, { type: USER_EVENTS, userEvents })
      ).toEqual({
        userEvents: userEvents
      });
    });

    it("should handle USER_NAME", () => {
      const userName = "Chuck Norris";
      expect(
        UserEventsReducer({ userName: "" }, { type: USER_NAME, userName })
      ).toEqual({
        userName: userName
      });
    });

    it("should clear the user events when the action CLEAR_USER_EVENTS is passed in", () => {
      const userEvents = [];
      expect(
        UserEventsReducer(
          { userEvents: ["Any", "random", "items"] },
          { type: CLEAR_USER_EVENTS }
        )
      ).toEqual({
        userEvents
      });
    });
  });

  describe("## selector", () => {
    it("should return [] as userEvents", () => {
      const initialStore = {
        UserEventsReducer: { userEvents: [] }
      };
      expect(getUserEvents(initialStore)).toEqual([]);
    });
    it("should return Chuck Norris as userName", () => {
      const initialStore = {
        UserEventsReducer: { userName: "ChuckNorris" }
      };
      expect(getUserName(initialStore)).toEqual("ChuckNorris");
    });
  });
});
