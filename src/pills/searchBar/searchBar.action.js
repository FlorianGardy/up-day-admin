export const UPDATE_SEARCH_VALUE = "@SearchBar/UPDATE_SEARCH_VALUE";
export const RESET_SEARCH_VALUE = "@SearchBar/RESET_SEARCH_VALUE";

export const updateSearchValue = searchValue => {
  return { type: UPDATE_SEARCH_VALUE, searchValue };
};

export const resetSearchValue = () => {
  return { type: RESET_SEARCH_VALUE };
};
