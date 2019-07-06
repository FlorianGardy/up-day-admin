import { USER_EVENTS, updateUserEvents } from "./userInfo.action";
import UserEventsReducer from "./userInfo.reducer";
import { getUserEvents } from "./userInfo.selector";

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
  });

  describe("## reducer", () => {
    it("should return initalState", () => {
      const initialState = {
        userEvents: []
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
  });

  describe("## selector", () => {
    it("should return [] as userEvents", () => {
      const initialStore = {
        UserEventsReducer: { userEvents: [] }
      };
      expect(getUserEvents(initialStore)).toEqual([]);
    });
  });
});
