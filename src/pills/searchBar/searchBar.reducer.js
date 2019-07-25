import { UPDATE_SEARCH_VALUE, RESET_SEARCH_VALUE } from "./searchBar.action";

const initalState = {
  searchValue: ""
};

export default function SearchBar(state = initalState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return { ...state, searchValue: action.searchValue };
    case RESET_SEARCH_VALUE:
      return { ...state, searchValue: "" };
    default:
      return state;
  }
}

// TODO: Test reducer
