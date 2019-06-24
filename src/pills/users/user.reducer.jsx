const initalState = {
  userList: []
};

export default function UserReducer(state = initalState, action) {
  switch (action.type) {
    case "@user/UPDATE_USER":
      return { ...state, userList: action.value };
    default:
      return state;
  }
}
