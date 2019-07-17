import {
  USER_EVENTS,
  USER_NAME,
  CLEAR_USER_EVENTS,
  updateUserEvents,
  updateUserName
} from "./userInfo.action";
import UserEvents from "./userInfo.reducer";
import {
  getUserEventsSelector,
  getUserNameSelector
} from "./userInfo.selector";

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
      expect(UserEvents(initialState, {})).toEqual(initialState);
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
        UserEvents({ userEvents: [] }, { type: USER_EVENTS, userEvents })
      ).toEqual({
        userEvents: userEvents
      });
    });

    it("should handle USER_NAME", () => {
      const userName = "Chuck Norris";
      expect(
        UserEvents({ userName: "" }, { type: USER_NAME, userName })
      ).toEqual({
        userName: userName
      });
    });

    it("should clear the user events when the action CLEAR_USER_EVENTS is passed in", () => {
      const userEvents = [];
      expect(
        UserEvents(
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
        UserEvents: { userEvents: [] }
      };
      expect(getUserEventsSelector(initialStore)).toEqual([]);
    });
    it("should return Chuck Norris as userName", () => {
      const initialStore = {
        UserEvents: { userName: "ChuckNorris" }
      };
      expect(getUserNameSelector(initialStore)).toEqual("ChuckNorris");
    });
  });
});
